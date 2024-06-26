import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionReaderService } from 'src/app/services/question-reader.service';
import { Question } from 'src/assets/models/question';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  preguntasParcial1: Question[] = []
  preguntasParcial2: Question[] = []

  constructor(private jsonReader: QuestionReaderService, private router: Router) { }

  ngOnInit(): void {
  }
  goMenu() {
    this.router.navigateByUrl('general');
  }

}
