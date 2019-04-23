import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  animations: [
    trigger('divState', [
      transition('void => *', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          // style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
      // transition('* => void', [
      //   animate(300, keyframes([
      //     style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
      //     style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
      //     style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
      //   ]))
      // ])
    ])
  ]
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
