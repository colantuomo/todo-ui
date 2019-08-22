import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService, UserLogin } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.mountForm();
  }

  mountForm() {
    this.formLogin = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  register() {
    // this.authService.register(this.registerForm as UserModel).subscribe((data: any) => {
    //   this.toastr.success('Agora você faz parte do time', 'Aeee!');
    //   localStorage.setItem('token', data.token);
    //   this.router.navigateByUrl('/tasks');
    // });
  }

  login() {
    this.authService.login(this.formLogin.value as UserLogin).subscribe((res: any) => {
      localStorage.setItem('token', res.data.token);
      this.router.navigateByUrl('/tasks');
    }, err => {

    })
  }

}
