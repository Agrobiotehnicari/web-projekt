import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KvizService } from '../kviz.service';
import { KvizDto } from '../KvizDto.model';

@Component({
  selector: 'app-rijeseni-kvizovi',
  templateUrl: './rijeseni-kvizovi.component.html',
  styleUrls: ['./rijeseni-kvizovi.component.css']
})
export class RijeseniKvizoviComponent implements OnInit {

  constructor(private kvizService: KvizService) { }
  
  allKviz: KvizDto[];

  ngOnInit() {
    this.kvizService.getUserSolvedKviz().subscribe(kvizovi =>{
      this.allKviz = kvizovi;
    });
  }

}
