import { Creator } from "./creator.model";
import { QA } from "./QA.model";
import { Ratings } from "./ratings.model";

export class Kviz {
    public name: string;
    public creator: Creator;
    public imagePath: string;
    public ratings: Ratings[];
    public created_at: Date;
    public description: string;
    public QA: QA[];


    constructor(name: string, 
                creator: Creator,  
                imagePath: string,
                ratings: Ratings[],
                created_at: Date,
                description: string,
                QA: QA[]){

        this.name = name;
        this.creator = creator;
        this.imagePath = imagePath;
        this.ratings = ratings;
        this.created_at = created_at;
        this.description = description;
        this.QA = QA;
    }
}
