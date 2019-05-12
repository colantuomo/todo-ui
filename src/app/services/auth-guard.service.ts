import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  private isAuthenticated = false;

  constructor(private router: Router) { }

  canActivate() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigateByUrl('/login')
      return this.isAuthenticated;
    }
    return this.isAuthenticated;
  }
}
