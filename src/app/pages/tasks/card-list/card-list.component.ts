import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { AddTaskComponent } from 'src/app/shared/components/add-task/add-task.component';
import { TasksService } from 'src/app/services/tasks.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Task } from 'src/app/shared/models/task.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() items: Task[];
  private categoryId: string;

  constructor(private dialog: MatDialog, private activatedRoute: ActivatedRoute,
    private taskService: TasksService, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;
      this.categoryId = id;
      this.setNotes(id);
    });
  }

  public deleteNote(): void {
    this.categoriesService.delete(this.categoryId).subscribe(() => this.categoriesService.onCategories.next());
  }

  public addNote(): void {
    const ref = this.dialog.open(AddTaskComponent);
    ref.afterClosed().subscribe(task => this._handleNewNote(task));
  }

  private setNotes(id: string): void {
    this.taskService.tasks(id).subscribe((res: Task[]) => {
      this.items = res;
    });
  }

  private _handleNewNote(description: string): void {
    if (!description) { return; }
    this.taskService.add({ categoryId: this.categoryId, description })
      .subscribe(() => this.setNotes(this.categoryId));
  }

}
