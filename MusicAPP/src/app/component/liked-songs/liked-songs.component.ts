import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-liked-songs',
  templateUrl: './liked-songs.component.html',
  styleUrls: ['./liked-songs.component.css']
})
export class LikedSongsComponent implements OnInit {
  songs: any;
  constructor(private song: UserService, private router: Router) {
    song.GetSong().subscribe((data) => {
      //console.warn("data", data);
      this.songs = data
    });
  }

  ngOnInit(): void {
  }
  btnclick() {
    this.router.navigateByUrl('/song');
  }
}
