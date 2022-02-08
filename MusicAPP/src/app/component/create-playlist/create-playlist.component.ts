import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent {
  playlists: any;

  constructor(private playlist: UserService, private router: Router, private http: HttpClient) {

    playlist.GetPlayList().subscribe((data) => {

      this.playlists = data
    });
  }

  btnClick2 = function () {
    this.router.navigateByUrl('/song');
  };

  deletePl(playlistID) {
    if (confirm('Are you sure to Delete Playlist?')) {
      this.playlist.deletePlaylist(playlistID)
        .subscribe(data => {
          this.playlists();
        });
    }
  }

}
