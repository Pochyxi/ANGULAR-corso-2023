import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users-component/users-component";
import {UserComponent} from "./user-component/user-component";
import {CommonModule} from "@angular/common";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserDataComponent} from "./user-data/user-data.component";

const routes: Routes = [
  {
    path: 'users',
    pathMatch: 'full',
    component: UsersComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: 'users/new',
    component: UserDetailComponent,
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent,
  },
  {
    path: 'users/:id',
    component: UserDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
