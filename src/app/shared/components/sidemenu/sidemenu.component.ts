import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SideMenuComponent implements OnInit {

  categories = [];

  constructor() { }

  ngOnInit() {
    this.fill();
  }

  fill() {
    this.categories = [
      { id: 1, title: 'work', pendencies: { todo: 5, done: 2 } },
      { id: 2, title: 'personal', pendencies: { todo: 10, done: 4 } },
      { id: 3, title: 'family', pendencies: { todo: 7, done: 17 } },
      { id: 4, title: 'study', pendencies: { todo: 12, done: 2 } },
    ];
  }

}
