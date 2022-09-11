import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Kviz } from '../kviz.model';
import { KvizService } from '../kviz.service';
import { QA } from '../QA.model';

@Component({
  selector: 'app-kviz-detail',
  templateUrl: './kviz-detail.component.html',
  styleUrls: ['./kviz-detail.component.css']
})
export class KvizDetailComponent implements OnInit {

  kviz: Kviz;
  id: number;
  isRated = false;
  qa: QA[];
  text: string;

  constructor(public kvizService: KvizService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // this.kviz = this.kvizService.getOneSortedKviz(this.id);
          this.isRated = this.kvizService.checkIfVoted(this.kviz);
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

}
