import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  input: string;
  input$: Subject<string>;
  @Output() search: EventEmitter<string>;
  constructor() {
    this.search = new EventEmitter();
    this.input$ = new Subject();
    this._handleInputSearch();
  }

  ngOnInit() {
  }

  onChange(): void {
    if (!this.input || this.input.trim() === '') {
      return;
    }
    this.input$.next(this.input);
  }

  private _handleInputSearch(): void {
    this.input$.pipe(
      debounceTime(1000)
    ).subscribe(text => {
      this.search.emit(text);
    });
  }

}
