import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static URL = `${environment.api}/auth`
  constructor(private httpClient: HttpClient) { }

  register(body: UserRegisterModel) {
    return this.httpClient.post(AuthService.URL, body);
  }
}

export interface UserRegisterModel {
  login: string,
  email: string,
  password: string
}
