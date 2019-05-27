import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { TasksComponent } from './tasks.component';

const ROUTES: Routes = [
  {
    path: '',
    component: TasksComponent
  }
]

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
})
export class TasksModule { }
