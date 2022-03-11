import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDetailsComponent } from './details/list-details/list-details.component';
import { ListRolesComponent } from './roles/list-roles/list-roles.component';
import { ListUComponent } from './users/list-u/list-u.component';

const routes: Routes = [
  {path:'',component: ListUComponent},
  {path:'roles',component: ListRolesComponent},
  {path:'users',component: ListUComponent},
  {path:'details',component: ListDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
