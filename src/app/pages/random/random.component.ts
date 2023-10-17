import { Component, OnInit } from '@angular/core';
import * as questionJSON from '../../../assets/tests/tema1.json';
import { Question } from 'src/assets/models/question';
import { HttpClient } from '@angular/common/http';
import { QuestionReaderService } from 'src/app/services/question-reader.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  questions: Question[] = []
  questionData: [Question[]] = [[]]
  quests: any[] = [];
  mapping: Map<number, number> = new Map<number, number>()
  givenQuestions: Map<number, Array<number>> = new Map<number, []>()
  totalPreguntas = 30
  constructor(private jsonReader: QuestionReaderService, private router: Router) { }

  ngOnInit(): void {
    this.getAverage()
  }

  getAverage() {
    let observables = [];
    for(let i = 1; i <= 6; i++) {
      observables.push(this.jsonReader.readTheme(i));
    }
  
    forkJoin(observables).subscribe(dataArray => {
      let totalPreguntas = 0;
  
      dataArray.forEach((data, index) => {
        this.questionData[index] = data
        totalPreguntas += data.length;
        this.mapping.set(index + 1, data.length);
      });
  
      console.log(totalPreguntas);
      
      let porcentaje=0.0000000
      for(let [key, value] of this.mapping.entries()) {
        this.mapping.set(key, porcentaje+=(value*100)/totalPreguntas)
      }

      this.assignQuestions()
    });
  }

  assignQuestions() {
    for(let i=0; i<this.totalPreguntas; i++) {
      let rand = Math.random()*100
      console.log("Aleatorio: ",rand);
      let theme = this.getTheme(rand);
      console.log("Tema: ",theme);
      let question = this.getRandQuestion(theme)
      console.log("Pregunta: ",question);
      this.questions.push(question)
    }
  }

  getTheme(numberToSuperate: number) {
    for(let [key, value] of this.mapping.entries()) {
      if(value>=numberToSuperate) {
        return key
      }
    }
    return 0
  }

  getRandQuestion(theme: number): Question {
    let random = Math.random() * this.questionData[theme-1].length
    if(this.givenQuestions.get(theme-1)?.includes(Math.floor(random))) {
      return this.getRandQuestion(theme)
    }
    
    return this.questionData[theme-1][Math.floor(random)]
  }

  goMenu() {
    this.router.navigateByUrl('general');
  }
}
