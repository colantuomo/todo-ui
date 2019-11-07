import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static URL = `${environment.api}/auth`;
  constructor(private httpClient: HttpClient) { }

  register(body: any) {
    return this.httpClient.post(`${AuthService.URL}/register`, body);
  }

  login(body: UserLogin) {
    return this.httpClient.post(`${AuthService.URL}/login`, body);
  }

  verifyToken() {
    return this.httpClient.get(`${AuthService.URL}/validate-token`);
  }
}

export interface UserLogin {
  email: string;
  password: string;
}
