import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CiclareUnArrayComponent} from "./ciclare-un-array/ciclare-un-array.component";
import {FiglioComponent} from "./figlio/figlio.component";
import {CommonModule} from "@angular/common";
import {UserDetailComponent} from "./user-detail/user-detail.component";

const routes: Routes = [
  {
    path: 'users',
    pathMatch: 'full',
    component: CiclareUnArrayComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users/new',
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
