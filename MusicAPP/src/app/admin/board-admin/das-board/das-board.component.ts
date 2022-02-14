import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-das-board',
  templateUrl: './das-board.component.html',
  styleUrls: ['./das-board.component.css']
})
export class DasBoardComponent implements OnInit {

  constructor(private routes: Router) {

  }

  ngOnInit(): void {
  }

}
