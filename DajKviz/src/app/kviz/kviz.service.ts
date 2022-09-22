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
    //TODO:
    //1. getKvizoviuTrendu()

    kvizChanged = new Subject<Kviz[]>();

    constructor(private http: HttpClient,
                @Inject('API_BASE_URL') private baseUrl: string){}

    setKvizovi(kvizovi: Kviz[]){
        // this.kvizovi = kvizovi;
        // console.log(kvizovi);
        // this.kvizChanged.next(this.kvizovi.slice());
    }

    getKvizovi(){
        // return this.kvizovi.slice();
    }

    getSortedKviz(){
        // let kvizovi: Kviz[] = this.getKvizovi();

        // kvizovi.sort( (a, b) => 
        //      a.name > b.name ? 1 : -1
        // );

        // return kvizovi.slice();
    }

    getOneSortedKviz(index: number){
        // let allKvizovi: Kviz[] = this.getSortedKviz();

        // return allKvizovi[index];
        
    }

    getKvizRating(kviz: Kviz){
        // let ratingAvg: number = 0;
        
        // if(kviz.ratings.length > 0){
        //     for(let index = 0; index < kviz.ratings.length; index++){
        //         ratingAvg = ratingAvg + kviz.ratings[index].rating;
        //     }

        //     ratingAvg = ratingAvg / kviz.ratings.length;
        //     return Math.round(ratingAvg*10)/10;
        // }
        // return 'Not rated yet';
    }

    checkIfVoted(kviz: Kviz){
        // const userData: {
        //     email: string, 
        //     id: string,
        //     _token: string,
        //     _tokenExpDate: string
        // } = JSON.parse(localStorage.getItem('userData'));

        // let email: string = userData.email;

        // for(let index = 0; index < kviz.ratings.length; index++){
        //     if(kviz.ratings[index].mail === email){
        //         return true;
        //     }
        // }
        return false;
    }

    getQA(kviz: Kviz){

    //     let allQA: QA[] = [];
        
    //    if(kviz.QA.length > 0){
    //     for(let index = 0; index < kviz.QA.length; index++){
    //         allQA.push(kviz.QA[index]);
    //     }
    //     return allQA;
    //    }
    }

    addQA(kviz: Kviz, text: string){
        console.log("Added qa")
        // const userData: {
        //     email: string, 
        //     id: string,
        //     _token: string,
        //     _tokenExpDate: string
        // } = JSON.parse(localStorage.getItem('userData'));

        // let email: string = userData.email;
        // let qa = new QA(email, text);

        // kviz.QA.push(qa);

        // this.http.put('https://beats-5369e-default-rtdb.firebaseio.com/albums.json',
        //                this.getAlbums()).subscribe(response =>
        //                 console.log(response));
    }

    addRating(kviz: Kviz, rating: number){
        console.log("Added Rating");
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

    getKvizById(id: string) : Observable<Kviz>
    {
        return this.http.get<Kviz>(`${this.baseUrl}/kviz/${id}`);
    }

}