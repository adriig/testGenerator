import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionReaderService } from 'src/app/services/question-reader.service';
import { Question } from 'src/assets/models/question';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.scss']
})
export class TemasComponent implements OnInit {
  questions: Question[] = []
  quests: any[] = [];
  constructor(private jsonReader: QuestionReaderService, private router: Router) { }

  ngOnInit(): void {
    this.getQuestions(1)
  }

  getQuestions(theme: number) {
    this.jsonReader.readTheme(theme).subscribe((data) => {
      this.questions = data
    })
  }

  goMenu() {
    this.router.navigateByUrl('general');
  }
}
