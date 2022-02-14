import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { song } from 'src/app/models/Song';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  song: any;
  songs: song;
  constructor(private userservice: UserService, private rotes: Router) {
    userservice.GetSong().subscribe((data) => {
      //console.warn("data", data);
      this.song = data
    });

  }
  btnClick1 = function () {
    this.rotes.navigateByUrl('/search');

  };
  btnclick(id: any) {
    if (confirm('Are you sure to Delete Profile?')) {
      this.userservice.deleteSong(id)
        .subscribe(data => {
          this.song();
        });
    }
  }
}


