import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component'

const routes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'survey/:id', component: SurveyComponent },
   { path: '**', redirectTo: '' }
  // ,  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
