import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  @Input() title: string;
  @Output() addNote: EventEmitter<any> = new EventEmitter();
  @Output() deleteNote: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
