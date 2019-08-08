import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { SideMenuModule } from 'src/app/shared/components/sidemenu/sidemenu.module';
import { TaskHeaderModule } from 'src/app/shared/components/task-header/task-header.module';
import { SearchBoxModule } from 'src/app/shared/components/search-box/search-box.module';
import { CardListModule } from 'src/app/shared/components/card-list/card-list.module';

const ROUTES: Routes = [
  {
    path: '',
    component: TasksComponent
  }
]

@NgModule({
  declarations: [TasksComponent],
  imports: [
    SideMenuModule,
    TaskHeaderModule,
    SearchBoxModule,
    CardListModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
})
export class TasksModule { }
