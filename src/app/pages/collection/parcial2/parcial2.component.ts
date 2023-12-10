import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionReaderService } from 'src/app/services/question-reader.service';
import { Question } from 'src/assets/models/question';

@Component({
  selector: 'app-parcial2',
  templateUrl: './parcial2.component.html',
  styleUrls: ['./parcial2.component.scss']
})
export class Parcial2Component implements OnInit {
  questions: Question[] = []
  constructor(private jsonReader: QuestionReaderService, private router: Router) { }

  ngOnInit(): void {
    for(let i = 9; i <= 12; i++) {
      this.jsonReader.readTheme(i).subscribe(data => {
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
