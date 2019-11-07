import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks.component';
import { SideMenuModule } from 'src/app/shared/components/sidemenu/sidemenu.module';
import { CardListComponent } from './card-list/card-list.component';
import { CardListModule } from './card-list/card-list.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

const ROUTES: Routes = [
  {
    path: '',
    component: TasksComponent,
    children: [
      {
        path: ':id',
        component: CardListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [TasksComponent],
  imports: [
    SideMenuModule,
    CardListModule,
    HeaderModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  entryComponents: []
})
export class TasksModule { }
