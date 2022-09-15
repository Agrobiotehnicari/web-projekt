module.exports = class CreateResultDto {
  userId;
  kvizId;
  result;

  constructor(userId, kvizId, result) {
    this.userId = userId;
    this.kvizId = kvizId;
    this.result = result;
  }
};
