import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ExamComponent } from './components/exam/exam.component';
import { QuestionComponent } from './components/question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemasComponent } from './pages/temas/temas.component';
import { RandomComponent } from './pages/random/random.component';
import { ColectionComponent } from './pages/colection/colection.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ExamComponent,
    QuestionComponent,
    TemasComponent,
    RandomComponent,
    ColectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
