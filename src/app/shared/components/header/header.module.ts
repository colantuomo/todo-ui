import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SideMenuModule } from '../sidemenu/sidemenu.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SideMenuModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
