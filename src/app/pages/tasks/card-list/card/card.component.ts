import { Component, OnInit, Input } from '@angular/core';

import { Task } from 'src/app/shared/models/task.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() content: any;

  constructor() { }

  ngOnInit() {
  }

  public delete(content: Task) {

  }

}
