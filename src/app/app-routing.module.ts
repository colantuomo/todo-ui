import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: './pages/home/home.module#HomeModule'
  // },
  {
    path: 'tasks',
    loadChildren: './pages/tasks/tasks.module#TasksModule',
  },
  {
    path: '**',
    redirectTo: '/tasks'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
