import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Answer } from "./answer.model";
import { CreateKviz } from "./create-kviz.model";
import { Kviz } from "./kviz.model";
import { QA } from "./QA.model";

@Injectable({
    providedIn: 'root'
})
export class KvizService {
    //TODO:
    //1. getKvizoviuTrendu()

    kvizChanged = new Subject<Kviz[]>();

    // private kvizovi: Kviz[] = 
    // [
    //     new Kviz('Koji si znak u horoskopu?',
    //              'Wibicaaa123',
    //              'https://www.artrea.com.hr/astrologija/Znakovi-Kineskog-Horoskopa.jpg',
    //              [],
    //              new Date('2022-05-20'),
    //              'Oduvijek si htio znati koji si znak u horoskopu? Klikni ovdje da saznas vise! Jako zabavan kviz!',
    //              [
    //                  new QA('Kad si rođen?', ['Danas', 'Jucer', 'Prekjucer']),
    //                  new QA('Koji si znak?', ['Ovan', 'Jarac', 'Riba'])
    //              ]),
    //     new Kviz('Koliko si zadovoljan ovim projektom?',
    //              'MR. SMILE',
    //              'https://stickershop.line-scdn.net/stickershop/v1/product/1021580/LINEStorePC/main.png;compress=true',
    //              [],
    //              new Date('2022-04-20'),
    //              'Koliko ste zadovoljni ovim projektom? Molimo samo pravi odgovori',
    //              [
    //                 new QA('Koliko ste zadovoljni ovim projektom?', ['Jako', 'Onako', 'Malo']),
    //                 new QA('Kako ste danas?', ['Ok', 'Not Ok'])
    //             ]),
    //     new Kviz('Fortnite kviz',
    //              'MR. SMILE',
    //              'https://image.api.playstation.com/vulcan/ap/rnd/202203/1819/sbaZEJ4jKCsdLAjQwVPSzMza.png',
    //              [],
    //              new Date('2022-01-01'),
    //              'Koliko zapravo znate igricu Fortnite? Odigrajte kviz pa saznajte!',
    //              [
    //                 new QA('Kako se zove igrica?', ['Fortnite', 'LOL', 'CS: Go']),
    //                 new QA('Tko je najveci Fortnite?', ['Onaj tamo', 'Ja', 'Ravnatelj'])
    //              ]),
    //     new Kviz('Fortnite kviz',
    //              'MR. SMILE',
    //              'https://image.api.playstation.com/vulcan/ap/rnd/202203/1819/sbaZEJ4jKCsdLAjQwVPSzMza.png',
    //              [],
    //              new Date('2022-01-01'),
    //              'Koliko zapravo znate igricu Fortnite? Odigrajte kviz pa saznajte!',
    //              [
    //                 new QA('Kako se zove igrica?', ['Fortnite', 'LOL', 'CS: Go']),
    //                 new QA('Tko je najveci Fortnite?', ['Onaj tamo', 'Ja', 'Ravnatelj'])
    //              ]),
    //     new Kviz('Fortnite kviz',
    //              'MR. SMILE',
    //              'https://image.api.playstation.com/vulcan/ap/rnd/202203/1819/sbaZEJ4jKCsdLAjQwVPSzMza.png',
    //              [],
    //              new Date('2022-01-01'),
    //              'Koliko zapravo znate igricu Fortnite? Odigrajte kviz pa saznajte!',
    //              [
    //                 new QA('Kako se zove igrica?', ['Fortnite', 'LOL', 'CS: Go']),
    //                 new QA('Tko je najveci Fortnite?', ['Onaj tamo', 'Ja', 'Ravnatelj'])
    //              ]),
    //     new Kviz('Fortnite kviz',
    //              'MR. SMILE',
    //              'https://image.api.playstation.com/vulcan/ap/rnd/202203/1819/sbaZEJ4jKCsdLAjQwVPSzMza.png',
    //              [],
    //              new Date('2022-01-01'),
    //              'Koliko zapravo znate igricu Fortnite? Odigrajte kviz pa saznajte!',
    //              [
    //                 new QA('Kako se zove igrica?', ['Fortnite', 'LOL', 'CS: Go']),
    //                 new QA('Tko je najveci Fortnite?', ['Onaj tamo', 'Ja', 'Ravnatelj'])
    //              ]),
    // ];

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

    addKviz(kviz: CreateKviz): Observable<any>
    {
        return this.http.post<void>(`${this.baseUrl}/Kviz`, kviz)
    }

}