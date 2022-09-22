import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Kviz } from '../kviz.model';
import { KvizService } from '../kviz.service';
import { QA } from '../QA.model';
import { Result } from '../result.model';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-kviz-detail',
  templateUrl: './kviz-detail.component.html',
  styleUrls: ['./kviz-detail.component.css']
})
export class KvizDetailComponent implements OnInit {

  kviz: Kviz;
  id: string;
  isRated = false;
  qa: QA[];
  text: string;
  result: Result;
  ratings: Object;
  userRating: Object;

  constructor(public kvizService: KvizService,
              private route: ActivatedRoute, private resultService: ResultService) { }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          const kvizId = params['id'];
          this.resultService.getUserResult(kvizId).subscribe(result => {
            this.result = result;
          })
          this.kvizService.getKvizById(kvizId).subscribe(kviz => {
            this.kviz = kviz;
            this.ratings = this.kvizService.getKvizRating(kviz)
            
          });
          this.kvizService.getUserRating(kvizId).subscribe(rating => {
            this.userRating = rating;
          })
        }
      );
  }

  onAddRating(rating: number){
    this.kvizService.addRating(this.id, rating).subscribe(kviz => {
      this.ratings = this.kvizService.getKvizRating(kviz);
      this.kvizService.getUserRating(this.id).subscribe(rating => {
        this.userRating = rating;
      })
    });
  }

}
