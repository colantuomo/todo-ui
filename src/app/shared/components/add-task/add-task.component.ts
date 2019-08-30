import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  title: string;

  constructor(public dialogRef: MatDialogRef<AddTaskComponent>) { }

  ngOnInit() {
  }

  add() {
    if (this.title) {
      this.dialogRef.close(this.title);
      this.title = null;
    }
  }

}
