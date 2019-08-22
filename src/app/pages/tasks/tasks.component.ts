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
    // this.getDashboard();
  }

  add(value) {
    // const task = {
    //   description: value,
    //   date: new Date(),
    //   user: this.user,
    //   active: true
    // }
    // this.newTask = '';
    // this.tasksService.add(task)
    //   .subscribe(() => {
    //     this.tasks();
    //     this.getDashboard();
    //   });
  }

  update(row) {
    row.active = !row.active;
    this.tasksService.update(row).subscribe(() => {
      this.getDashboard();
    });
  }

  delete(row) {
    this.tasksService.delete(row)
      .subscribe(() => this.get());
  }

  get() {
    this.tasksService.tasks().subscribe(tasks => this.tasks = tasks);
  }

  getDashboard() {
    // this.isLoading = true;
    // this.tasksService.dashboard()
    //   .subscribe(data => {
    //     this.dashboard = data
    //     this.isLoading = false;
    //   });
  }

  tasksWithParam(param) {
    // this.isLoading = true;
    // this.tasksService.tasksWithParam(param).subscribe(res => {
    //   this.rows = res;
    //   this.isLoading = false;
    // })

  }

}
