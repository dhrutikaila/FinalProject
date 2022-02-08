import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-library',
  templateUrl: './your-library.component.html',
  styleUrls: ['./your-library.component.css']
})
export class YourLibraryComponent {
  public isCollapsed = true;
  Yours: any;
  constructor(private your: UserService, private router: Router) {

    your.GetAlbums().subscribe((data) => {

      this.Yours = data
    });
  }

  btnClick1 = function () {
    this.router.navigateByUrl('/song');
  };
}
