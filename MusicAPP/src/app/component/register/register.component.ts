//This component binds form data (username, email, password) from template to AuthService.
//register() method that returns an Observable object.

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../../models/user'
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;




  constructor(private router: Router, private userservice: UserService, private toaster: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      username: '',
      Password: '',
      email: '',
      ContactNo: '',
    }
  }
  onSubmit(form: NgForm) {
    this.userservice.RegisterUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          alert('User registration successful');

        }
        this.router.navigateByUrl('/login')
      });
  }
  Login() {
    this.router.navigateByUrl('/login')
  }


}


