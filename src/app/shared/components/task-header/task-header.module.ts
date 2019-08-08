import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskHeaderComponent } from './task-header.component';

@NgModule({
  declarations: [TaskHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [TaskHeaderComponent]
})
export class TaskHeaderModule { }
