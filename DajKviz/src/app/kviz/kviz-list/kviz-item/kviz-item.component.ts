import { Component, Input, OnInit } from '@angular/core';
import { Kviz } from '../../kviz.model';
import { KvizNew } from '../../kvizNew.model';

@Component({
  selector: 'app-kviz-item',
  templateUrl: './kviz-item.component.html',
  styleUrls: ['./kviz-item.component.css']
})
export class KvizItemComponent implements OnInit {
  @Input() kviz: Kviz;

  constructor() { }

  ngOnInit(): void {
  }

}
