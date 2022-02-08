import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  playlists: any;
  constructor(private playlist: UserService) {
    playlist.getProfile().subscribe((data: any) => {

      this.playlists = data
    });
  }

  ngOnInit(): void {
  }

}
