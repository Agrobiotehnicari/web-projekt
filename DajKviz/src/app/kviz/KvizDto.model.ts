import { Ratings } from "./ratings.model";

export class KvizDto {
    public id: string;
    public name: string;
    public imagePath: string;
    public ratings: Ratings[];
    public createDate: Date;
    public description: string;


    constructor(id: string,
                name: string, 
                imagePath: string,
                ratings: Ratings[],
                createDate: Date,
                description: string,){
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.ratings = ratings;
        this.createDate = createDate;
        this.description = description;
    }
}
