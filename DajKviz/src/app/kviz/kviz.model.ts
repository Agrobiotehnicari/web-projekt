import { Ratings } from "./ratings.model";

export class Kviz {
    public name: string;
    public creator: string;
    public imagePath: string;
    public ratings: Ratings[];
    public createDate: Date;
    public description: string;
    public question: string;
    public answer: string;


    constructor(name: string, 
                creator: string,  
                imagePath: string,
                ratings: Ratings[],
                createDate: Date,
                description: string,
                question: string,
                answer: string){

        this.name = name;
        this.creator = creator;
        this.imagePath = imagePath;
        this.ratings = ratings;
        this.createDate = createDate;
        this.description = description;
        this.question   = question;
        this.answer = answer;
    }
}
