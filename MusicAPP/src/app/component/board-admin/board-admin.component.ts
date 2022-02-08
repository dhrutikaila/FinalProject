//These Components are role-based. But authorization will be processed by back-end.
//We only need to call UserService methods:

//getUserBoard()
//getModeratorBoard()
//getAdminBoard()
//Here is an example for BoardAdminComponent.
//BoardModeratorComponent & BoardUserComponent are similar.


import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../_services/user.service';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  public data: any;


  constructor(private userService: UserService, private routes: Router) { }

  ngOnInit() {

  }
  onsubmit() {
    return this.routes.navigateByUrl('/user')

  }
}
