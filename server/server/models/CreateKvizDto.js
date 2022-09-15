module.exports = class CreateKvizDto {
  name;
  imagePath;
  description;
  QA;

  constructor(name, imagePath, description, QA) {
    this.name = name;
    this.imagePath = imagePath;
    this.description = description;
    this.QA = QA;
  }
};
