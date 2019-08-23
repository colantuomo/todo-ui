import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    URL = `${environment.api}/categories`;
    constructor(private httpClient: HttpClient) { }

    getCategories(): Observable<any> {
        return this.httpClient.get(this.URL);
    }

    addCategory(category: string): Observable<any> {
        return this.httpClient.post(this.URL, { category });
    }
}
