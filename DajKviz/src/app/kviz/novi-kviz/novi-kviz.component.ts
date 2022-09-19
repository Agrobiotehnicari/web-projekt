import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateKviz } from '../create-kviz.model';
import { KvizService } from '../kviz.service';
import { QA } from '../QA.model';

@Component({
  selector: 'app-novi-kviz',
  templateUrl: './novi-kviz.component.html',
  styleUrls: ['./novi-kviz.component.css'],
})
export class NoviKvizComponent implements OnInit {
  public questions: QA[];
  public successAlert: boolean = false;

  constructor(public kvizService: KvizService) {
    this.questions = [];
  }

  ngOnInit(): void {
    this.onAddQuestion();
  }

  onSubmit(name: string, imagePath: string, description: string, form: NgForm) {
    let newKviz: CreateKviz = {
      name,
      imagePath,
      description,
      QA: this.questions,
    };
    this.kvizService.addKviz(newKviz).subscribe(
      (response) => {
        // handle success
        this.successAlert = true;
        window.scrollTo(0,0);
        form.reset();
      },
      (error) => {
        form.reset();
      }
    );
  }
  onAddQuestion() {
    this.questions.push(this.kvizService.addNewQuestion());
  }
}
