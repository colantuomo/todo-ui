import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
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
