import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'src/assets/models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionReaderService {

  constructor(private http: HttpClient) { }

  getUrl(number: number) {
    return '../../../assets/tests/tema'+number+'.json'
  }

  readTheme(theme: number) {
    return this.http.get<Question[]>(this.getUrl(theme))
  }

  addQuestion(theme: number, data: any) {
    return this.http.post(this.getUrl(theme), data)
  }

  
}
