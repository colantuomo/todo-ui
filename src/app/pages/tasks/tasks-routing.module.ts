import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { CardListComponent } from './card-list/card-list.component';

const ROUTES: Routes = [
    {
        path: '',
        component: TasksComponent,
        children: [
            {
                path: ':id',
                component: CardListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }
