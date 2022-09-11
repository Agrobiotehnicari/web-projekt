import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Kviz } from '../kviz.model';
import { KvizService } from '../kviz.service';

@Component({
  selector: 'app-kvizovi-u-trendu',
  templateUrl: './kvizovi-u-trendu.component.html',
  styleUrls: ['./kvizovi-u-trendu.component.css']
})
export class KvizoviUTrenduComponent implements OnInit {

  constructor(private kvizService: KvizService) { }
  
  allKviz: Kviz[];
  subscription: Subscription;

  ngOnInit() {

    this.subscription = this.kvizService.kvizChanged
      .subscribe(
        (allKviz: Kviz[]) => {
          this.allKviz = allKviz;
        }
      );
    // this.allKviz = this.kvizService.getSortedKviz();
  }

}
