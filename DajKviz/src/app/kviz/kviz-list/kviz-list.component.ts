import { Component, OnInit } from '@angular/core';
import { Kviz } from '../kviz.model';
import { KvizService } from '../kviz.service';
import { KvizNew } from '../kvizNew.model';

@Component({
  selector: 'app-kviz-list',
  templateUrl: './kviz-list.component.html',
  styleUrls: ['./kviz-list.component.css']
})
export class KvizListComponent implements OnInit {

  kvizovi: Kviz[];
  

  constructor(private kvizService: KvizService) { }

  ngOnInit(): void {
    this.kvizovi = this.kvizService.getKvizovi();
  }

}
