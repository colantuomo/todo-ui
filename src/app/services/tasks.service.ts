import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../shared/models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) { }

  tasks(id: string): Observable<Task[]> {
    const url = `${environment.api}/tasks/${id}`;
    return this.httpClient.get<Task[]>(url);
  }

  add(task) {
    const url = `${environment.api}/tasks`;
    return this.httpClient.post(url, task);
  }

  update(task) {
    const url = `${environment.api}/tasks`;
    return this.httpClient.put(url, task);
  }

  delete(task) {
    const url = `${environment.api}/tasks/${task._id}`;
    return this.httpClient.delete(url);
  }

  dashboard() {
    const url = `${environment.api}/tasks/dashboard`;
    return this.httpClient.get(url);
  }

  tasksWithParam(param) {
    const url = `${environment.api}/tasks/${param}`;
    return this.httpClient.get(url);
  }

  search(param: string, categoryId: string) {
    const url = `${environment.api}/tasks/search`;
    return this.httpClient.post(url, { param, categoryId });
  }
}
