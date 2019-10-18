import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public categories: Observable<any[]>;
  public activeId: number;
  public category: string;

  @Output() selectCategory = new EventEmitter<any>();

  constructor(private categoriesService: CategoriesService, private activatedRoute: ActivatedRoute) {
    this.categoriesService.onCategories.subscribe(() => this.fill());
  }

  ngOnInit() {
    this._handleRouteParams();
    this.fill();
  }

  fill() {
    this.categories = this.categoriesService.getCategories();
  }

  add() {
    this.categoriesService.addCategory(this.category).subscribe(() => this.fill());
    this.category = '';
  }

  private _handleRouteParams(): void {
    this.activatedRoute.params.subscribe(params => {
      this.activeId = params.id;
      console.log('handle routes', this.activeId);
    });
  }

}
