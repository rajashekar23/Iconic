import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TotalContainer } from './containers/total/total.container';

const routes: Routes = [
  {path: '', component: TotalContainer}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
