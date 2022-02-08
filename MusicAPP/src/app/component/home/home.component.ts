
//Our Home Component will use UserService to get public resources from back-end.

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { playlist } from 'src/app/models/PlayList';

import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private Userservice: UserService, private toaster: ToastrService) {


  }

  btnClick = function () {
    this.router.navigateByUrl('/song');
  };
  btnClick1 = function () {

    this.router.navigateByUrl('/Add');
  }


}
