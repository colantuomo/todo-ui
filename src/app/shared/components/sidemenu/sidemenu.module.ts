import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from './sidemenu.component';
import { EmptyBoxModule } from '../empty-box/empty-box.module';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    EmptyBoxModule
  ],
  exports: [SideMenuComponent]
})
export class SideMenuModule { }
