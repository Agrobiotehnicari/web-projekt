const mongoose = require("mongoose");

const kvizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  creator: {
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  ratings: [
    {
      userId: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
  ],
  QA: [
    {
      question: {
        type: String,
        required: true,
      },
      correctAnswer: {
        type: Number,
        required: true,
      },
      answers: [
        {
          type: String,
          required: true,
        },
      ],
    },
  ],
});

const Kviz = mongoose.model("Kviz", kvizSchema);

module.exports = Kviz;
