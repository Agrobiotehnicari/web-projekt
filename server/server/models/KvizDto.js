module.exports = class KvizDto {
    id;
    name;
    creator;
    imagePath;
    description;
    ratings;
    created_at;
  
    constructor(id, name, creator, imagePath, description, ratings, created_at) {
      this.id=id;
      this.name = name;
      this.creator = creator;
      this.imagePath = imagePath;
      this.description = description;
      this.ratings = ratings;
      this.created_at = created_at;
    }
  };
  