import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  private isAuthenticated = false;

  constructor() { }

  canActivate() {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }
}
