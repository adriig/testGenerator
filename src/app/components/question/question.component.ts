import { Component, Input, OnInit } from '@angular/core';
import { question } from 'src/assets/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() pregunta!: question

  constructor() { }

  ngOnInit(): void {
  }

}
