
//This service sends signup, login HTTP POST requests to back-end.
//localstorage
//Permanent Storage.
//No expire date unless you remove it.
//Domain-specific.

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { song } from '../models/Song';

const AUTH_API = 'https://localhost:44305/api/Authentication';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'appliction/json-patch+json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly rootUrl = 'https://localhost:44305';
  constructor(private http: HttpClient) { }

  login(UserName: string, Password: string): Observable<any> {
    return this.http.post(AUTH_API + '/login', {
      UserName,
      Password
    }, httpOptions);
  }

  gettoken() {
    return !!localStorage.getItem("SessionUser");
  }

  AddPlaylists(playlists: song) {
    const Bodys: song = {
      Name: playlists.Name,
      Picture: playlists.Picture,

      SongFile: playlists.SongFile,


      ViewCount: playlists.ViewCount,
      Downloads: playlists.Downloads,
      CreatedOn: playlists.CreatedOn
    }
    return this.http.post(this.rootUrl + '/api/SONG', Bodys);

  }

}
