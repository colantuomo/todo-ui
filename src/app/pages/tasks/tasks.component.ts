import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  items: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectCategory(items: any) {
    this.router.navigateByUrl(`tasks/${items._id}`);
  }

}
