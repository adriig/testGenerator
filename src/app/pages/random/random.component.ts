import { Component, OnInit } from '@angular/core';
import * as questionJSON from '../../../assets/tests/tema1.json';
import { Question } from 'src/assets/models/question';
import { HttpClient } from '@angular/common/http';
import { QuestionReaderService } from 'src/app/services/question-reader.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  questions: Question[] = []
  quests: any[] = [];
  constructor(private jsonReader: QuestionReaderService, private router: Router) { }

  ngOnInit(): void {
     this.jsonReader.readTheme(1).subscribe((data) => {
      this.questions = data
    })
  }

  goMenu() {
    this.router.navigateByUrl('general');
  }

  desestructureQuestions(question: any) {
    let { statement, answers, theme, page } = question
    let questionFormatted: Question = {
      statement: statement,
      answers: answers,
      theme: theme,
      page: page
    } 
    return questionFormatted
  }



}
