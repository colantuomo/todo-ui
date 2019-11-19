import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { SideMenuModule } from 'src/app/shared/components/sidemenu/sidemenu.module';
import { CardListModule } from './card-list/card-list.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [TasksComponent],
  imports: [
    SideMenuModule,
    CardListModule,
    HeaderModule,
    CommonModule,
    TasksRoutingModule
  ],
  entryComponents: []
})
export class TasksModule { }
