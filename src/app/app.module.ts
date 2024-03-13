import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule } from '@angular/material/icon'
import { MatButtonModule }  from '@angular/material/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ExamComponent } from './components/exam/exam.component';
import { QuestionComponent } from './components/question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemasComponent } from './pages/temas/temas.component';
import { RandomComponent } from './pages/random/random.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { HttpClientModule } from '@angular/common/http';
import { CountdownPipe } from './pipes/countdown.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Parcial1Component } from './pages/collection/parcial1/parcial1.component';
import { Parcial2Component } from './pages/collection/parcial2/parcial2.component';
import { Issi2parcial1Component } from './pages/collection/issi2parcial1/issi2parcial1.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ExamComponent,
    QuestionComponent,
    TemasComponent,
    RandomComponent,
    CollectionComponent,
    CountdownPipe,
    Parcial1Component,
    Parcial2Component,
    Issi2parcial1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
