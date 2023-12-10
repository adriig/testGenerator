import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionReaderService } from 'src/app/services/question-reader.service';
import { Question } from 'src/assets/models/question';

@Component({
  selector: 'app-parcial1',
  templateUrl: './parcial1.component.html',
  styleUrls: ['./parcial1.component.scss']
})
export class Parcial1Component implements OnInit {
  questions: Question[] = []
  constructor(private jsonReader: QuestionReaderService, private router: Router) { }

  ngOnInit(): void {
    for(let i = 1; i <= 8; i++) {
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
