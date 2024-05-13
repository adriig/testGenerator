import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionReaderService } from 'src/app/services/question-reader.service';
import { Question } from 'src/assets/models/question';

@Component({
  selector: 'app-issi2parcial2',
  templateUrl: './issi2parcial2.component.html',
  styleUrls: ['./issi2parcial2.component.scss']
})
export class Issi2parcial2Component implements OnInit {
  questions: Question[] = []
  constructor(private jsonReader: QuestionReaderService, private router: Router) { }

  ngOnInit(): void {
    for(let i = 8; i <= 13; i++) {
      this.jsonReader.readTheme2("issi2tema"+i).subscribe(data => {
        for(let question of data) {
          this.questions.push(question)
        }
        
      })
    }
  }

  goMenu() {
    this.router.navigateByUrl('general');
  }

}
