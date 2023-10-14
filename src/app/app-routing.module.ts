import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ExamComponent } from './components/exam/exam.component';
import { TemasComponent } from './pages/temas/temas.component';
import { RandomComponent } from './pages/random/random.component';
import { ColectionComponent } from './pages/colection/colection.component';

const routes: Routes = [
  {
    path: 'general',
    component: IndexComponent,
  }, 
  { path: 'aleatorio', component: RandomComponent },
  { path: 'temas', component: TemasComponent },
  { path: 'coleccion', component: ColectionComponent },
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
