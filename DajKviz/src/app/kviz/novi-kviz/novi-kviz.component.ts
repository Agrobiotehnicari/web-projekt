import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateKviz } from '../create-kviz.model';
import { KvizService } from '../kviz.service';
import { QA } from '../QA.model';

@Component({
  selector: 'app-novi-kviz',
  templateUrl: './novi-kviz.component.html',
  styleUrls: ['./novi-kviz.component.css']
})
export class NoviKvizComponent implements OnInit {

  public questions: QA[];

  constructor(public kvizService: KvizService) { 
    this.questions = [];
  }

  ngOnInit(): void {
    this.onAddQuestion();
    
  }

  onSubmit(name: string, imagePath: string, description: string, questions: QA[], form: NgForm)
  {

    let newKviz: CreateKviz = {name, imagePath, description, QA: this.questions};
    this.kvizService.addKviz(newKviz).subscribe((response)=>{
      // handle success
      form.reset();
    },(error)=>{
      form.reset();
    });
  }
  onAddQuestion()
  {
    console.log("Before " , this.questions)
    this.questions.push(this.kvizService.addNewQuestion());
    console.log("After ", this.questions)

  }
}
