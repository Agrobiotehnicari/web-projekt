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
          this.kvizService.getKvizById(this.id).subscribe(kviz => {
            this.kviz = kviz;
            this.ratings = this.kvizService.getKvizRating(kviz)
            this.isRated = this.kvizService.checkIfVoted(kviz);
          });
          
        }
      );

      // this.qa = this.kvizService.getQA(this.kviz);
  }

  onAddRating(kviz: Kviz, rating: number){
    this.kvizService.addRating(kviz, rating);
    this.isRated = this.kvizService.checkIfVoted(kviz);
  }

  onAddQA(kviz: Kviz, text: string, form: NgForm){
    this.kvizService.addQA(kviz, text);

    form.reset();
  }

  formatDate(date: Date){

  }

}
