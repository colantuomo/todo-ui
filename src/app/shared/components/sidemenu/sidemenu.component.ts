import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Output() selectCategory = new EventEmitter<any>();
  categories: any[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.fill();
  }

  fill() {
    this.categoriesService.getCategories().subscribe(res => this.categories = res);
  }

  add(category: string) {
    this.categoriesService.addCategory(category).subscribe(() => this.fill());
  }

}
