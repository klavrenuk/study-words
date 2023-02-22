import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewWordsComponent } from './components/new-words/new-words.component';
import { PageNowFoundComponent } from './components/page-now-found/page-now-found.component';

const routes: Routes = [
  {path: 'new-words', component: NewWordsComponent},
  {path: '', component: DashboardComponent},
  {path: '**', component: PageNowFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
