import { Component, OnInit } from '@angular/core';
import { Kviz } from '../kviz/kviz.model';
import { KvizService } from '../kviz/kviz.service';
import { KvizNew } from '../kviz/kvizNew.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  kvizovi: Kviz[];

  constructor(private kvizService: KvizService) { }

  ngOnInit(): void {
    this.kvizovi = this.kvizService.getKvizovi();
  }

}
