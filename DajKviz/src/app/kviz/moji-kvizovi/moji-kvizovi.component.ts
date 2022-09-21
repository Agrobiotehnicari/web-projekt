import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KvizService } from '../kviz.service';
import { KvizDto } from '../KvizDto.model';

@Component({
  selector: 'app-moji-kvizovi',
  templateUrl: './moji-kvizovi.component.html',
  styleUrls: ['./moji-kvizovi.component.css']
})
export class MojiKvizoviComponent implements OnInit {

  constructor(private kvizService: KvizService) { }
  
  allKviz: KvizDto[];
  subscription: Subscription;

  ngOnInit() {

    this.subscription = this.kvizService.kvizChanged
      .subscribe(
        (allKviz: KvizDto[]) => {
          this.allKviz = allKviz;
        }
      );
    this.kvizService.getUserKviz().subscribe(kvizovi =>{
      this.allKviz = kvizovi;
    });
  }

}
