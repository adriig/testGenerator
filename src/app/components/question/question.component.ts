import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Question } from 'src/assets/models/question';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Answers } from 'src/assets/models/answers';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question!: Question
  @Input() numberQuestion: number = 0
  @Output() answeredQuestion = new EventEmitter<boolean>();
  questionStyles: string[] = []
  answerStatus: boolean[] = []
  isDisabled: boolean = true;
  isMultiple: boolean = false;
  isFinished: boolean = false;
  isCorrect: boolean = false;
  constructor() {
   }

  ngOnInit(): void {
    this.isMultiple = this.checkMultiple()

    for(let i=0; i<=this.question.answers.length; i++) {
      this.questionStyles[i]='default'
    }

    if (Array.isArray(this.question.answers) && this.question.answers.length >= 2) {
      this.shuffleArray(this.question.answers);
    }
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
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
    let status = true
    for(let i=0; i<=this.questionStyles.length; i++) {
      if(this.questionStyles[i]!='bien' && this.questionStyles[i]!==undefined && this.questionStyles[i]!='default') {
        console.log("checking as false", this.questionStyles[i]);
        
        status = false
      }
    }

    this.isCorrect = status
    this.answeredQuestion.emit(status)
    this.isFinished=true
  }
}

export interface answersStatus {
  id: number,
  status: boolean
}
