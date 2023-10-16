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
  aciertos: number = 0
  fallos: number = 0
  contestadas: number = 0
  constructor() { }

  ngOnInit(): void {
    this.aciertos = 0
    this.fallos = 0
    this.contestadas = 0
    this.timeInSeconds = 0     
    setInterval(() => {
      this.timeInSeconds++;
    }, 1000); // 1000 milisegundos = 1 segundo
  }

  takeCalification(event: any) {
    this.contestadas++
    console.log(event);
    
    if(event) {
      this.aciertos++
    } else {
      this.fallos++
    }
    
  }

}
