import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty-box',
  templateUrl: './empty-box.component.html',
  styleUrls: ['./empty-box.component.scss']
})
export class EmptyBoxComponent implements OnInit {


  show: boolean;
  @Input() message: string;
  @Input() set item(item: any) {
    this.show = this._validateItem(item);
  }
  constructor() { }

  ngOnInit() {
  }

  private _validateItem(item: any) {
    return !item || item.length === 0 ? true : false;
  }

}
