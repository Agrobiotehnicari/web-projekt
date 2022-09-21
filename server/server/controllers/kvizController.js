const CreateKvizDto = require("../models/CreateKvizDto");
const Kvizdb = require("../models/kviz");
const KvizDto = require("../models/KvizDto");
const Resultdb = require("../models/result");
const mongoose = require('mongoose');
const Rating = require("../models/rating");

// Retrieve and return all projects / retrieve and return a single project
exports.find = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not logged in");
  }

  Kvizdb.find()
    .then((kviz) => {
      return res.json(kviz);
    })
    .catch((err) => {
      return res.status(500).send({
        message:
          err.message || "Error occurred while retrieving quiz information!",
      });
    });
};

exports.findById = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not logged in");
  }

  const id = req.params.id;

  Kvizdb.findById(id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Quiz with ${id} not found!`,
        });
      } else {
        return res.json(data);
      }
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ message: `Error retrieving quiz with id ${id}` });
    });
};

exports.findByUserId = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not logged in");
  }

  const id = req.params.id;

  Kvizdb.find({ "creator.id": id }).sort({created_at: -1})
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Quizes with user id ${id} not found!`,
        });
      } else {

        const kvizovi = data.map(kviz => new KvizDto(
          kviz._id, kviz.name, kviz.imagePath, kviz.description, kviz.ratings, kviz.created_at
        ));
        return res.status(200).send(kvizovi);
      }
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ message: `Error retrieving quiz with user id ${id}` });
    });
};

exports.findUserSolved = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not logged in");
  }
  const id = req.params.id;

  const solvedKvizovi = await Resultdb.find({userId: id}).sort({created_at: -1})
          .then(data => {
            return data});
  if(solvedKvizovi.length === 0){
    return res.status(404).send({message: `Error finding results with user id ${id}`});
  }

  const kvizIds = solvedKvizovi.map(function(el) { return mongoose.Types.ObjectId(el.kvizId) });
  Kvizdb.find({"_id" : {"$in" : kvizIds}}).then(data => {
    const kvizovi = data.map(kviz => new KvizDto(
      kviz._id, kviz.name, kviz.imagePath, kviz.description, kviz.ratings, kviz.created_at
    ));
    return res.status(200).send(kvizovi);
   });
}

exports.userRating = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send({ message: "You are not logged in!" });
  }
  const kvizId = req.params.id;
  const userId = req.user._id;

  Kvizdb.findById(kvizId).select('ratings')
    .then(data => {
      if(!data){
        return res.status(204);
      }
      else{
        const kvizRatings = data.ratings;
        const userRating = kvizRatings.find(rating => rating.userId === userId.toString());
        return res.status(200).send(userRating);
      }
    })
}

// Create and save a new project
exports.create = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send({ message: "You are not logged in!" });
  }

  // validate request
  if (!req.body) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  const kvizInfo = new CreateKvizDto(
    (name = req.body.name),
    (imagePath = req.body.imagePath),
    (description = req.body.description),
    (QA = req.body.QA)
  );
  // new project
  const kviz = new Kvizdb({
    name: kvizInfo.name,
    description: kvizInfo.description,
    imagePath: kvizInfo.imagePath,
    QA: kvizInfo.QA,
    created_at: new Date(Date.now()),
    creator: {
      id: req.user._id,
      username: req.user.username,
    },
  });
  // save kviz in db
  kviz
    .save(kviz)
    .then((data) => {
      return res.status(201).send({id: data._id});
    })
    .catch((err) => {
      return res.status(500).send({
        message:
          err.message || "Some error occurred while creating a new quiz!",
      });
    });
};

// Update a project by id
exports.update = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not logged in");
  }

  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Data to update can not be empty!" });
  }

  const id = req.params.id;

  Kvizdb.findById(id).then((kviz) => {
    // Only creator can update kviz
    if (kviz.creator.id === req.user._id.toString()) {
      updateKviz(id, req.body, res);
    } else {
      return res.status(401).send("Unauthorized");
    }
  });
};

exports.getTrendingKviz = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not logged in");
  }

  Kvizdb.find().sort({ratings : -1}).then((data) => {
    if (!data) {
      return res.status(404).send({
        message: `No kvizes have been rated`,
      });
    } else {

      const kvizovi = data.map(kviz => new KvizDto(
        kviz._id, kviz.name, kviz.imagePath, kviz.description, kviz.ratings, kviz.created_at
      ));
      return res.status(200).send(kvizovi);
    }
  })
}

exports.addRating = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not logged in");
  }

  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Data to update can not be empty!" });
  }

  const id = req.params.id;

  Kvizdb.findById(id).then((kviz) => {
    // Only logged in user can add rating
    if (kviz.ratings.find((rating) => (rating.userId === req.user._id.toString()))) {
      return res.status(400).send({ message: "You already rated this quiz!" });
    } else {
      const userRating = new Rating(req.user._id, req.body.rating);
      kviz.ratings.push(userRating);
      
      updateKviz(id, kviz, res);
    }
  });
};

function updateKviz(id, data, res) {
  Kvizdb.findByIdAndUpdate(id, data, { new: true })
    .then((kviz) => {
      if (!kviz) {
        return res
          .status(404)
          .send({ message: `Cannot update kviz with ${id}.` });
      } else {
        return res.status(201).send(kviz);
      }
    })
    .catch((err) => {
      return res.status(500).send({ message: "Invalid kviz information" });
    });
}

function deleteKviz(id, res) {
  Kvizdb.findByIdAndDelete(id)
    .then((kviz) => {
      if (!kviz) {
        return res.status(404).send({
          message: `Cannot delete kviz with id ${id}. Maybe id is wrong.`,
        });
      } else {
        return res.send({
          message: "Kviz was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Could not delete kviz with ${id}`,
      });
    });
}

// Delete a project by id
exports.delete = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not logged in");
  }

  const id = req.params.id;
  Kvizdb.findById(id)
    .then((data) => {
      if (data.creator.id !== req.user._id.toString()) {
        return res
          .status(401)
          .send({ message: "Only creator can delete the kviz" });
      } else {
        deleteKviz(id, res);
      }
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ message: `Error retrieving kviz with id ${id}` });
    });
};
