import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExamComponent } from 'src/app/components/exam/exam.component';
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
  @ViewChild(ExamComponent) examComponent!: ExamComponent;
  constructor(private jsonReader: QuestionReaderService, private router: Router) { }

  ngOnInit(): void {
    this.getQuestions(1)
  }

  getQuestions(theme: number) {
    this.jsonReader.readTheme(theme).subscribe((data) => {
      this.questions = data
    })

    this.questions.sort(this.compareQuestions);
  }

  compareQuestions(a: Question, b: Question): number {
    const randomValue = 0.5 - Math.random();
    return randomValue;
  }
  
  callQuestions(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = parseInt(selectElement.value, 10);
    this.getQuestions(selectedValue)
  }

  goMenu() {
    this.router.navigateByUrl('general');
  }
}
