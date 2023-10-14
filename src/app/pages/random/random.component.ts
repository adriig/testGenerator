import { Component, OnInit } from '@angular/core';
import * as questions from '../../../assets/tests/tema1.json';
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(questions);
    
  }



}
