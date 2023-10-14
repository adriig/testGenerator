import { Component, Input, OnInit } from '@angular/core';
import { question } from 'src/assets/models/question';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  @Input() preguntas: question[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
