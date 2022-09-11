import { Component, Input, OnInit } from '@angular/core';
import { Kviz } from '../../kviz.model';
import { KvizService } from '../../kviz.service';

@Component({
  selector: 'app-kviz-list-expanded',
  templateUrl: './kviz-list-expanded.component.html',
  styleUrls: ['./kviz-list-expanded.component.css']
})
export class KvizListExpandedComponent implements OnInit {

  @Input() kviz: Kviz;
  @Input() index: number;

  constructor(public kvizService: KvizService) { }

  ngOnInit(): void {
  }

}
