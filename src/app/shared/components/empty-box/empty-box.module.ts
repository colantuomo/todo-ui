import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyBoxComponent } from './empty-box.component';

@NgModule({
  declarations: [EmptyBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [EmptyBoxComponent]
})
export class EmptyBoxModule { }
