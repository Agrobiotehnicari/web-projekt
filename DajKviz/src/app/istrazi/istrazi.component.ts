import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KvizService } from '../kviz/kviz.service';
import { KvizDto } from '../kviz/KvizDto.model';

@Component({
  selector: 'app-istrazi',
  templateUrl: './istrazi.component.html',
  styleUrls: ['./istrazi.component.css']
})
export class IstraziComponent implements OnInit {

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
    this.kvizService.getAll().subscribe(kvizovi =>{
      this.allKviz = kvizovi;
    });
  }


}
