import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Kviz } from "./kviz.model";
import { KvizService } from "./kviz.service";
import { DataStorageService } from "./data-storage.service";
import { KvizNew } from "./kvizNew.model";

@Injectable({ providedIn: 'root' })
export class KvizResolverService implements Resolve<Kviz[]>{

    constructor(private kvizService: KvizService,
                private dsStorage: DataStorageService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let kvizovi: Kviz[] = this.kvizService.getKvizovi();
        
        if(kvizovi.length === 0){
            return this.dsStorage.fetchKviz();
        }
        else {
            return kvizovi;
        }
    }

}