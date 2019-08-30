import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddTaskComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AddTaskComponent]
})
export class AddTaskModule { }
