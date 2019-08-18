import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { CardModule } from './card/card.module';
import { EmptyBoxModule } from '../empty-box/empty-box.module';

@NgModule({
  declarations: [CardListComponent],
  imports: [
    CommonModule,
    CardModule,
    EmptyBoxModule,
  ],
  exports: [CardListComponent]
})
export class CardListModule { }
