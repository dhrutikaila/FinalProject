//These Components are role-based. But authorization will be processed by back-end.
//We only need to call UserService methods:

//getUserBoard()
//getModeratorBoard()
//getAdminBoard()
//Here is an example for BoardAdminComponent.
//BoardModeratorComponent & BoardUserComponent are similar.


import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { song } from 'src/app/models/Song';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from '../../_services/user.service';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  songs: any;

  constructor(private routes: Router, private userservice: UserService) {

  }

  ngOnInit() {

  }

  onsubmit() {
    return this.routes.navigateByUrl('/user')

  }
  btnsubmit() {
    return this.routes.navigateByUrl('/songup')

  }

}


