import { QA } from "./QA.model";
import { Ratings } from "./ratings.model";

export class Kviz {
    public name: string;
    public creator: string;
    public imagePath: string;
    public ratings: Ratings[];
    public createDate: Date;
    public description: string;
    public QA: QA[];


    constructor(name: string, 
                creator: string,  
                imagePath: string,
                ratings: Ratings[],
                createDate: Date,
                description: string,
                QA: QA[]){

        this.name = name;
        this.creator = creator;
        this.imagePath = imagePath;
        this.ratings = ratings;
        this.createDate = createDate;
        this.description = description;
        this.QA = QA;
    }
}
