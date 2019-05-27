import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService, UserModel } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm: any = {};
  loginForm: any = {};
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.registerForm as UserModel).subscribe((data: any) => {
      this.toastr.success('Agora você faz parte do time', 'Aeee!');
      localStorage.setItem('token', data.token);
      this.router.navigateByUrl('/tasks');
    });
  }

  login() {
    this.authService.login(this.loginForm as UserModel).subscribe((res: any) => {
      localStorage.setItem('token', res.data.token);
      this.router.navigateByUrl('/tasks');
    }, err => {

    })
  }

}
