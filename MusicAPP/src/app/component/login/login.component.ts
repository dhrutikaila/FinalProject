import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: login;

  constructor(private router: Router, private userservice: UserService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      username: '',
      Password: '',
    }
  }
  login() {
    this.router.navigateByUrl('/create')
  }
  onSubmit(form: NgForm) {
    this.userservice.loginuser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          alert('User registration successful');
        }
        this.router.navigateByUrl('/create')
      });
  }
}
