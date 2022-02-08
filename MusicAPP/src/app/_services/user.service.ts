
//this services provides methodes to access public and protected resources.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { playlist } from '../models/PlayList';
import { login } from '../models/login';
//import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl = 'https://localhost:44305';

  constructor(private http: HttpClient) { }
  //register users
  RegisterUser(user: User) {
    const body: User = {
      username: user.username,
      Password: user.Password,
      email: user.email,
      ContactNo: user.ContactNo,

    }

    return this.http.post(this.rootUrl + '/api/Authentication/register', body);
  }
  loginuser(user: login) {
    const Bodyw: login = {
      username: user.username,
      Password: user.Password,
    }

    return this.http.post('http://restapi.adequateshop.com/api/authaccount/login', Bodyw);
  }

  AddPlaylists(playlists: playlist) {
    const Bodys: playlist = {

      Title: playlists.Title
    }
    return this.http.post(this.rootUrl + '/api/PlayList', Bodys);

  }

  GetPlayList() {

    return this.http.get(this.rootUrl + '/api/PlayList');
  }
  GetAlbums() {

    return this.http.get(this.rootUrl + '/api/Album');
  }
  GetSong() {

    return this.http.get(this.rootUrl + '/api/SONG');
  }

  deletePlaylist(playlistID) {

    return this.http.delete('https://localhost:44305/api/PlayList?PlaylistID=' + playlistID);

  }

  getProfile() {
    return this.http.get('https://localhost:44305/api/ProfileControler/api/ProfileControler');
  }

}


