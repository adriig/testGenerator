import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Question } from 'src/assets/models/question';
import { finished } from 'stream';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question!: Question
  @Input() numberQuestion: number = 0
  questionStyles: string[] = []
  answerStatus: boolean[] = []
  isDisabled: boolean = true;
  isMultiple: boolean = false;
  isFinished: boolean = false;
  constructor() {
    
   }

  ngOnInit(): void {
    this.isMultiple = this.checkMultiple()

    for(let i=0; i<=this.question.answers.length; i++) {
      this.questionStyles[i]='default'
    }
  }

  checkMultiple():boolean {
    let sum=0;
    for(let answer of this.question.answers) {
      if(answer.isCorrect=='true') {
        sum++
      }
    }
    return sum>1
  } 

  changeStatus(index: number, event: Event) {
    if(!this.isMultiple) {
      for(let i=0; i<this.answerStatus.length; i++) {
        if(i!=index) {
          this.answerStatus[i]=false
        }
      }
    }
    this.checkStatus()
  }


  checkStatus() {
    let disabled = true
    console.log(this.answerStatus);
    
    for(let i=0; i<=this.answerStatus.length; i++) {
      if(this.answerStatus[i]) {
        disabled=false
      }
    }
    this.isDisabled = disabled
  }

  checkIsRight() {
    for(let i=0; i<this.question.answers.length; i++) {
      if(this.question.answers[i].isCorrect =='false' && this.answerStatus[i]) {
        console.log("UNA MAL");
        this.questionStyles[i]='mal'
      } else if(this.question.answers[i].isCorrect =='true' && this.answerStatus[i]) {
        console.log("UNA BIEN");
        this.questionStyles[i]='bien'
      } else if(this.question.answers[i].isCorrect =='true' && !this.answerStatus[i]) {
        console.log("FALTA UNA POR CONTESTAR");
        this.questionStyles[i]='nc'
      }
    }
    this.isFinished=true
  }
}

export interface answersStatus {
  id: number,
  status: boolean
}
