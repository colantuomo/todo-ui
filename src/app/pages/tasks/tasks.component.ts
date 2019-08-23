import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: any[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.get();
  }

  delete(row) {
    this.tasksService.delete(row)
      .subscribe(() => this.get());
  }

  get() {
    this.tasksService.tasks().subscribe(tasks => this.tasks = tasks);
  }

  selectCategory(item: any) {
    console.log(item);

  }

}
