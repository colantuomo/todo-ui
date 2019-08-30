import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { CardListComponent } from './card-list.component';
import { CardModule } from './card/card.module';
import { EmptyBoxModule } from 'src/app/shared/components/empty-box/empty-box.module';
import { TaskHeaderModule } from 'src/app/shared/components/task-header/task-header.module';
import { SearchBoxModule } from 'src/app/shared/components/search-box/search-box.module';
import { AddTaskModule } from 'src/app/shared/components/add-task/add-task.module';
import { AddTaskComponent } from 'src/app/shared/components/add-task/add-task.component';

@NgModule({
  declarations: [CardListComponent],
  imports: [
    CommonModule,
    CardModule,
    EmptyBoxModule,
    TaskHeaderModule,
    SearchBoxModule,
    AddTaskModule,
    MatDialogModule
  ],
  exports: [CardListComponent],
  entryComponents: [AddTaskComponent]
})
export class CardListModule { }
