import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Answer } from "./answer.model";
import { CreateKviz } from "./create-kviz.model";
import { Kviz } from "./kviz.model";
import { KvizDto } from "./KvizDto.model";
import { QA } from "./QA.model";

@Injectable({
    providedIn: 'root'
})
export class KvizService {
    constructor(private http: HttpClient,
                @Inject('API_BASE_URL') private baseUrl: string){}

    addRating(kvizId: string, rating: number): Observable<Kviz>{
        return this.http.post<Kviz>(`${this.baseUrl}/kviz/${kvizId}/rating`, {rating: rating});
    }

    addNewQuestion()
    {
        let question: QA;
        let answers: string[] = [
            '', '', '', ''
        ];
        return question = new QA('',0, answers);
    }

    addKviz(kviz: CreateKviz): Observable<Object>
    {
        return this.http.post<Object>(`${this.baseUrl}/kviz`, kviz)
    }

    getAll(): Observable<KvizDto[]>
    {
        return this.http.get<KvizDto[]>(`${this.baseUrl}/kviz`);
    }

    getUserKviz(): Observable<KvizDto[]>
    {
        const userId = JSON.parse(localStorage.getItem('user'))['id'];
        return this.http.get<KvizDto[]>(`${this.baseUrl}/kviz/user/${userId}`);
    }

    getUserSolvedKviz() : Observable<KvizDto[]>
    {
        const userId = JSON.parse(localStorage.getItem('user'))['id'];
        return this.http.get<KvizDto[]>(`${this.baseUrl}/kviz/user/${userId}/solved`);
    }

    getTrendingKvizovi() : Observable<KvizDto[]>
    {
        return this.http.get<KvizDto[]>(`${this.baseUrl}/kviz/trending`);
    }

    getKvizById(id: string) : Observable<Kviz>{
        return this.http.get<Kviz>(`${this.baseUrl}/kviz/${id}`);
    }

    getKvizRating(kviz: Kviz): Object{
        let ratingAvg: number = 0;
        
        if(kviz.ratings.length > 0){
            for(let index = 0; index < kviz.ratings.length; index++){
                ratingAvg = ratingAvg + kviz.ratings[index].rating;
            }

            ratingAvg = ratingAvg / kviz.ratings.length;
            return Math.round(ratingAvg*10)/10;
        }
        return 'Not rated yet';
    }

    getUserRating(kvizId: string): Observable<Kviz>{
        return this.http.get<Kviz>(`${this.baseUrl}/kviz/${kvizId}/rating`);
    }

}