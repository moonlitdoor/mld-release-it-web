import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SurveyComponent} from './survey/survey.component';
import {TrunkbasedComponent} from "./trunkbased/trunkbased.component";
import {GitflowComponent} from "./gitflow/gitflow.component";
import {BlogComponent} from "./blog/blog.component";

const routes: Routes = [
    {path: 'trunkbased', component: TrunkbasedComponent},
    {path: 'gitflow', component: GitflowComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'survey', component: SurveyComponent},
    {path: 'survey/:id', component: SurveyComponent},
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: ''}
    // ,  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
