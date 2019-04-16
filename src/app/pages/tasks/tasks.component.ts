import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, AfterViewInit {

  isLoading: boolean;
  user: string;
  newTask: string;
  rows;
  dashboard: any = { todo: 0, done: 0, all: 0 };
  @ViewChild('modal') modal: ElementRef;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.user = sessionStorage.getItem('user')
    if (this.user) {
      this.tasks();
      this.getDashboard();
    }
  }

  ngAfterViewInit(): void {
    if (this.user) {
      return;
    }
    let el: HTMLElement = this.modal.nativeElement as HTMLElement;
    el.click();
  }

  add(value) {
    const task = {
      description: value,
      date: new Date(),
      user: this.user,
      active: true
    }
    this.newTask = '';
    this.tasksService.add(task)
      .subscribe(() => {
        this.tasks();
        this.getDashboard();
      });
  }

  update(row) {
    row.active = !row.active;
    this.tasksService.update(row).subscribe(() => {
      this.getDashboard();
    });
  }

  delete(row) {
    this.tasksService.delete(row)
      .subscribe(() => this.tasks());
  }

  tasks() {
    this.isLoading = true;
    this.tasksService.tasks().subscribe(tasks => {
      this.rows = tasks;
      this.isLoading = false;
    });
  }

  getDashboard() {
    this.isLoading = true;
    this.tasksService.dashboard()
      .subscribe(data => {
        this.dashboard = data
        this.isLoading = false;
      });
  }

  setUser(user) {
    sessionStorage.setItem('user', user);
    this.user = user;
    this.tasks();
    this.getDashboard();
  }

  tasksWithParam(param) {
    this.isLoading = true;
    this.tasksService.tasksWithParam(param).subscribe(res => {
      this.rows = res;
      this.isLoading = false;
    })

  }

}
