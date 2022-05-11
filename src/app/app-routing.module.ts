import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetresultsComponent } from './getresults/getresults.component';




const routes: Routes = [
   { path: 'getResults', component: GetresultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }