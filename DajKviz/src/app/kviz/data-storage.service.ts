import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Kviz } from "./kviz.model";
import { KvizService } from "./kviz.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService { 

    constructor(private http: HttpClient,
                private kvizService: KvizService){}

    fetchKviz(){
        return this.http
            .get<Kviz[]>('localhost:8080/korisnikKvizovi/1')           
            .pipe(
                    map(kvizovi => {
                         return kvizovi.map(kviz => {
                            return {...kviz, 
                                    ratings: kviz.ratings ? kviz.ratings: [],
                                };
                                });
                        }),
                    tap(kvizovi => {
                        this.kvizService.setKvizovi(kvizovi);
                    })
                )
    }
}


