import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Kviz } from '../kviz/kviz.model';
import { KvizService } from '../kviz/kviz.service';
import { KvizDto } from '../kviz/KvizDto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  kvizovi: Kviz[];
  userKvizovi: KvizDto[];
  solvedKvizovi : KvizDto[];
  trendingKvizovi: KvizDto[];

  constructor(private kvizService: KvizService) { }

  ngOnInit(): void {
    // this.kvizovi = this.kvizService.getKvizovi();
    this.getUserKvizovi();
    this.getSolvedKvizovi();
    this.getTrendingKvizovi();
  }

  getTrendingKvizovi(){
    this.kvizService.getTrendingKvizovi().subscribe(
      (kvizovi) => {
        this.trendingKvizovi = kvizovi.slice(0,3);
      }
    );
  }

  getUserKvizovi(){
    this.kvizService.getUserKviz().subscribe(
      (kvizovi) => {
        this.userKvizovi = kvizovi.slice(0,3);
      }
    );
  }

  getSolvedKvizovi(){
    this.kvizService.getUserSolvedKviz().subscribe(
      (kvizovi) => {
        this.solvedKvizovi = kvizovi.reverse().slice(0,3);
      }
    );
  }

}
