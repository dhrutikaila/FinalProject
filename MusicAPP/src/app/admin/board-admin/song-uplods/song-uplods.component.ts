import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { song } from 'src/app/models/Song';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-song-uplods',
  templateUrl: './song-uplods.component.html',
  styleUrls: ['./song-uplods.component.css']
})
export class SongUplodsComponent implements OnInit {
  songs: song;
  song: any;
  constructor(private userService: AuthService, private routes: Router, private userservice: UserService) {

  }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.songs = {
      Name: '',
      Picture: '',
      SongFile: '',
      ViewCount: 0,
      Downloads: 0,
      CreatedOn: undefined
    }
  }

  btnSong(form: NgForm) {
    this.userService.AddPlaylists(form.value).subscribe((result: any) => {
      if (result.Succeeded == true) {
        this.resetForm(form);

      }
      this.routes.navigateByUrl('/admin');
    })
  }
}
