import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateResultDto } from '../createResultDto.model';
import { Kviz } from '../kviz.model';
import { KvizService } from '../kviz.service';
import { QA } from '../QA.model';
import { Result } from '../result.model';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-play-kviz',
  templateUrl: './play-kviz.component.html',
  styleUrls: ['./play-kviz.component.css']
})
export class PlayKvizComponent implements OnInit {

  public kvizId: string;
  public kviz: Kviz;
  public userAnswers: number[] = [];
  constructor(private route: ActivatedRoute, private kvizService: KvizService, private resultService: ResultService, private router:Router) { }

  ngOnInit(): void {
    this.kvizId = this.route.snapshot.paramMap.get('id');
    this.kvizService.getKvizById(this.kvizId).subscribe(kviz => {
      this.kviz = kviz;
    })

  }

  submitResult(){
    if(confirm('Are you sure you want to submit your answers?') === true){
      console.log(this.userAnswers)
      console.log(this.kviz.QA.map(QA => QA['correctAnswer']));
      const correctAnswers = this.kviz.QA.filter((QA, index) => {
        let userAnswer = this.userAnswers[index].toString();
        let correctAnswer = QA['correctAnswer'].toString();
        return userAnswer === correctAnswer;
      });
      
      const result = new CreateResultDto(
        this.kvizId, {correctAnswers: correctAnswers.length, questions: this.kviz.QA.length}
      )
      
      this.resultService.addResult(result).subscribe(resultId => {
        this.router.navigate([`/rijeseni-kvizovi/${this.kvizId}`]);
          console.log('successfully created result!', resultId);
      })
    }
  }
}
