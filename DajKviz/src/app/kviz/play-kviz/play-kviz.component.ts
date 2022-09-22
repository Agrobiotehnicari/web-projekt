import { Component, OnInit } from '@angular/core';
import { Kviz } from '../kviz.model';
import { KvizService } from '../kviz.service';

@Component({
  selector: 'app-play-kviz',
  templateUrl: './play-kviz.component.html',
  styleUrls: ['./play-kviz.component.css']
})
export class PlayKvizComponent implements OnInit {

  kviz: Kviz;
  id: string = '631e4f14704de8628e9a9f65';

  constructor(private kvizService: KvizService) { }

  ngOnInit() 
  {
    this.kvizService.getKvizById(this.id).subscribe((kviz) => {
      this.kviz = kviz;
    })
  }
}
