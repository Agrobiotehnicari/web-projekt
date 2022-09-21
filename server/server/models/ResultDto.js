module.exports = class ResultDto {
    correctAnswers;
    questions;

  
    constructor(correctAnswers, questions) {
      this.correctAnswers=correctAnswers;
      this.questions = questions;
    }
  };
  