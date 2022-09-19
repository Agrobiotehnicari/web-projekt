module.exports = class KvizDto {
    id;
    name;
    imagePath;
    description;
    ratings;
    created_at;
  
    constructor(id, name, imagePath, description, ratings, created_at) {
      this.id=id;
      this.name = name;
      this.imagePath = imagePath;
      this.description = description;
      this.ratings = ratings;
      this.created_at = created_at;
    }
  };
  