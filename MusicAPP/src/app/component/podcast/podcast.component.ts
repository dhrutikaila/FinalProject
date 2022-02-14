import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {
  Yours: any;
  constructor(private your: UserService, private routes: Router) {
    your.getPodcast().subscribe((data) => {

      this.Yours = data
    });
  }

  ngOnInit(): void {
  }
  btnClick2() {
    this.routes.navigateByUrl('/song')
  }
}
