import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  songs: any;

  constructor(private song: UserService, private rotes: Router) {

  }
  btnClick1 = function () {
    this.rotes.navigateByUrl('/search');
  };

}


