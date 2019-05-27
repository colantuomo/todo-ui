import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private router: Router, private authService: AuthService) { }

  async canActivate() {
    const res: any = await this.authService.verifyToken().toPromise();
    if (!res.error) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
