import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './sidemenu.component';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [SideMenuComponent]
})
export class SideMenuModule { }
