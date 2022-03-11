import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUComponent } from './list-u/list-u.component';



@NgModule({
  declarations: [
    ListUComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ListUComponent]
})
export class UsersModule { }
