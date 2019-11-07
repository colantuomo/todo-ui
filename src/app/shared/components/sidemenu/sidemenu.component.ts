import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  @Output() selectCategory = new EventEmitter<void>();

  constructor(private categoriesService: CategoriesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.categoriesService.onCategories.subscribe(() => this.fill());
  }

  ngOnInit() {
    this.fill();
    this._handleRouteParams();
    this._handleDeleteCategory();
  }

  fill(): void {
    this.categories = this.categoriesService.getCategories();
  }

  add(): void {
    if (!this.category) {
      return;
    }
    this.categoriesService.addCategory(this.category).subscribe(() => this.fill());
    this.category = '';
  }

  navigateCategory(id: number): void {
    this.selectCategory.emit();
    this.activeId = id;
    this.router.navigateByUrl(`tasks/${id}`);
  }

  private _handleRouteParams(): void {
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;
      if (!id) {
        this._setCategoryId();
      } else {
        this.activeId = params.id;
      }
    });
  }

  private _setCategoryId(): void {
    this.categories.subscribe(list => {
      const id = this.activeId = list.shift()._id;
      this.navigateCategory(id);
    });
  }

  private _handleDeleteCategory(): void {
    this.categoriesService.onCategories.subscribe(() => {
      this._setCategoryId();
    });
  }

}
