import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';

import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';

import { SearchComponent } from './component/search/search.component';

import { LikedSongsComponent } from './component/liked-songs/liked-songs.component';
import { YourLibraryComponent } from './component/your-library/your-library.component';
import { CreatePlaylistComponent } from './component/create-playlist/create-playlist.component';

import { SongComponent } from './component/song/song.component';
import { AuthGuard } from './_services/auth.guard';

import { LoginComponent } from './component/login/login.component';
import { AddComponent } from './component/add/add.component';
import { PodcastComponent } from './component/podcast/podcast.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },

  {
    path: 'song', component: SongComponent,
  },

  { path: 'register', component: RegisterComponent },
  { path: 'Add', component: AddComponent },

  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'liked', component: LikedSongsComponent, canActivate: [] },
  { path: 'your', component: YourLibraryComponent, canActivate: [] },
  { path: 'create', component: CreatePlaylistComponent, canActivate: [] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Routes array is passed to the RouterModule.forRoot() method.
//We’re gonna use <router-outlet></router-outlet> directive in the App Component 
//where contains navbar and display Components (corresponding to routes) content.