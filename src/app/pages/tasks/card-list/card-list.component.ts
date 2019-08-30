import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { AddTaskComponent } from 'src/app/shared/components/add-task/add-task.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() items: Array<any>;
  constructor(private dialog: MatDialog, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => console.log(params.id));
  }

  addNote() {
    const ref = this.dialog.open(AddTaskComponent);
    ref.afterClosed().subscribe(task => this._handleNewNote(task));
  }

  private _handleNewNote(task: any) {
    if (!task) {
      return;
    }
  }

}
