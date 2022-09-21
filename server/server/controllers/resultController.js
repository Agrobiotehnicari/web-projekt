var Resultdb = require("../models/result");
var CreateResultDto = require("../models/CreateResultDto.js");
const ResultDto = require("../models/ResultDto");
// Retrieve and return all projects / retrieve and return a single project
exports.find = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not logged in");
  }

  Resultdb.find()
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Error occurred while retrieving results!",
      });
    });
};

exports.finbByUserId = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not logged in");
  }

  const id = req.params.id;

  Resultdb.find({ userId: id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Results with userId ${id} not found!`,
        });
      } else {
        return res.json(data);
      }
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ message: `Error retrieving result with id ${id}` });
    });
};

exports.findByKvizId = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not logged in");
  }

  const id = req.params.id;

  Resultdb.find({ kvizId: id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Results with userId ${id} not found!`,
        });
      } else {
        return res.json(data);
      }
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ message: `Error retrieving result with id ${id}` });
    });
};

// Create and save a new project
exports.create = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send({ message: "You are not logged in!" });
  }

  // validate request
  if (!req.body) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  const resultInfo = new CreateResultDto(
    (userId = req.user._id),
    (kvizId = req.body.kvizId),
    (result = req.body.result)
  );
  // new project
  const resultEntry = new Resultdb({
    userId: resultInfo.userId,
    kvizId: resultInfo.kvizId,
    result: resultInfo.result,
    created_at: new Date(Date.now()),
  });
  // save result in db
  resultEntry
    .save(resultEntry)
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while saving the result!",
      });
    });
};

exports.userResult = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send({ message: "You are not logged in!" });
  }

  // validate request
  if (!req.body) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  const reqInfo = {
    userId: req.user._id,
    kvizId: req.params.id
  };

  Resultdb.findOne({userId: reqInfo.userId, kvizId: reqInfo.kvizId})
    .then(data => {
      if (!data) {
        return res.status(204).send({
          message: `Result with userId ${reqInfo.userId} and kvizId ${reqInfo.kvizId} not found!`,
        });
      } else {
        const resultDto = new ResultDto(data.result.correctAnswers, data.result.questions);
        return res.status(200).json(resultDto);
      }
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ message: `Error retrieving result with userId ${reqInfo.userId} and kvizId ${reqInfo.kvizId}` });
    })
}

function deleteResult(id, res) {
  Resultdb.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: `Cannot delete result with id ${id}. Maybe id is wrong.`,
        });
      } else {
        return res.send({
          message: "Result was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Could not delete result with ${id}`,
      });
    });
}

// Delete a project by id
exports.delete = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You are not logged in");
  }

  const id = req.params.id;
  deleteResult(id, res);
};
