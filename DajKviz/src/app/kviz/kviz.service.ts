import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Kviz } from "./kviz.model";
import { KvizNew } from "./kvizNew.model";
import { QA } from "./QA.model";

@Injectable({
    providedIn: 'root'
})
export class KvizService {

    private kvizovi: Kviz[] = 
    [
        new Kviz('Koji si znak u horoskopu?',
                 'Wibicaaa123',
                 'https://www.artrea.com.hr/astrologija/Znakovi-Kineskog-Horoskopa.jpg',
                 [],
                 new Date('2022-05-20'),
                 'Oduvijek si htio znati koji si znak u horoskopu? Klikni ovdje da saznas vise! Jako zabavan kviz!',
                 [
                     new QA('Kad si rođen?', ['Danas', 'Jucer', 'Prekjucer']),
                     new QA('Koji si znak?', ['Ovan', 'Jarac', 'Riba'])
                 ]),
        new Kviz('Koliko si zadovoljan ovim projektom?',
                 'MR. SMILE',
                 'https://stickershop.line-scdn.net/stickershop/v1/product/1021580/LINEStorePC/main.png;compress=true',
                 [],
                 new Date('2022-04-20'),
                 'Koliko ste zadovoljni ovim projektom? Molimo samo pravi odgovori',
                 [
                    new QA('Koliko ste zadovoljni ovim projektom?', ['Jako', 'Onako', 'Malo']),
                    new QA('Kako ste danas?', ['Ok', 'Not Ok'])
                ]),
        new Kviz('Fortnite kviz',
                 'MR. SMILE',
                 'https://image.api.playstation.com/vulcan/ap/rnd/202203/1819/sbaZEJ4jKCsdLAjQwVPSzMza.png',
                 [],
                 new Date('2022-01-01'),
                 'Koliko zapravo znate igricu Fortnite? Odigrajte kviz pa saznajte!',
                 [
                    new QA('Kako se zove igrica?', ['Fortnite', 'LOL', 'CS: Go']),
                    new QA('Tko je najveci Fortnite?', ['Onaj tamo', 'Ja', 'Ravnatelj'])
                 ])
    ];

    constructor(private http: HttpClient){}

    setKvizovi(kvizovi: Kviz[]){
        this.kvizovi = kvizovi;
        console.log(kvizovi);
    }

    getKvizovi(){
        return this.kvizovi.slice();
    }

}