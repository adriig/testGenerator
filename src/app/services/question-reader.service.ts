import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'src/assets/models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionReaderService {

  constructor(private http: HttpClient) { }

  getUrl(name: string) {
    return 'assets/tests/'+name+'.json'
  }

  readTheme(name: string) {
    return this.http.get<Question[]>(this.getUrl(name))
  }

  getUrl2(name: string) {
    return 'assets/tests/'+name+'.json'
  }

  readTheme2(name: string) {
    return this.http.get<Question[]>(this.getUrl2(name))
  }

  addQuestion(name: string, data: any) {
    return this.http.post(this.getUrl(name), data)
  }

  
}
