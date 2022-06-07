
import { Ratings } from "./ratings.model";

export class KvizNew {
    public imeKviza: string;
    public idKrestora: number;
    public id: number;
    public created_date: Date;
    public ratings: Ratings[];


    constructor(imeKviza: string, 
                idKrestora: number,  
                id: number,
                created_date: Date,
                ratings: Ratings[]){

        this.imeKviza = imeKviza;
        this.idKrestora = idKrestora;
        this.id = id;
        this.ratings = ratings;
        this.created_date = created_date;
        this.ratings = ratings;
    }
}
