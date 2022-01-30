import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailsComponent} from "./views/details/details.component";
import {MainComponent} from "./views/main/main.component";


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
