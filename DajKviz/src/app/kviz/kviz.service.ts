import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Kviz } from "./kviz.model";

@Injectable({
    providedIn: 'root'
})
export class KvizService {

    private kvizovi: Kviz[];

    constructor(private http: HttpClient){}

    setKvizovi(kvizovi: Kviz[]){
        this.kvizovi = kvizovi;
        console.log(kvizovi);
    }

    getKvizovi(){
        return this.kvizovi.slice();
    }

}