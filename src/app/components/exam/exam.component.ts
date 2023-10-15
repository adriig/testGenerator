import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/assets/models/question';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  @Input() preguntas: Question[] = []
  timeInSeconds: number = 0
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.timeInSeconds++;
    }, 1000); // 1000 milisegundos = 1 segundo
  }

}
