import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ExamComponent } from './components/exam/exam.component';
import { TemasComponent } from './pages/temas/temas.component';
import { RandomComponent } from './pages/random/random.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { Parcial1Component } from './pages/collection/parcial1/parcial1.component';
import { Parcial2Component } from './pages/collection/parcial2/parcial2.component';

const routes: Routes = [
  {
    path: 'general',
    component: IndexComponent,
  }, 
  { path: 'aleatorio', component: RandomComponent },
  { path: 'temas', component: TemasComponent },
  { path: 'coleccion', component: CollectionComponent },
  { path: 'parcial1', component: Parcial1Component },
  { path: 'parcial2', component: Parcial2Component },
  {
    path: '**',
    redirectTo: 'general'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
