//This component is the root Component of our Angular application, 
//it defines the root tag: <app-root></app-root> that we use in index.html.



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MusicAPP';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;

  Username?: string;


  constructor() { }

  ngOnInit(): void {

  }

  logout(): void {

  }
}
