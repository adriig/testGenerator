import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionReaderService } from 'src/app/services/question-reader.service';
import { Question } from 'src/assets/models/question';

@Component({
  selector: 'app-issi2issi2parcial1',
  templateUrl: './issi2parcial1.component.html',
  styleUrls: ['./issi2parcial1.component.scss']
})
export class Issi2parcial1Component implements OnInit {
  questions: Question[] = []
  constructor(private jsonReader: QuestionReaderService, private router: Router) { }

  ngOnInit(): void {
    for(let i = 1; i <= 7; i++) {
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
