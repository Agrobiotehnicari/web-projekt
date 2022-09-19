const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  kvizId: {
    type: String,
    required: true,
  },
  result: {
    correctAnswers: {
      type: Number,
      required: true,
    },
    questions: {
      type: Number,
      required: true,
    },
  },
  created_at: {
    type: Date,
    required: true,
  },
});

resultSchema.index({ userId: 1, kvizId: 1 }, { unique: true });

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
