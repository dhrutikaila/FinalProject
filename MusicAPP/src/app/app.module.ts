import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';

import { SearchComponent } from './component/search/search.component';

import { YourLibraryComponent } from './component/your-library/your-library.component';
import { CreatePlaylistComponent } from './component/create-playlist/create-playlist.component';
import { LikedSongsComponent } from './component/liked-songs/liked-songs.component';
import { SongComponent } from './component/song/song.component';
import { UserService } from './_services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_services/auth.guard';

import { LoginComponent } from './component/login/login.component';

import { AdminModule } from './admin/admin.module';
import { AddComponent } from './component/add/add.component';
import { PodcastComponent } from './component/podcast/podcast.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,

    SearchComponent,
    YourLibraryComponent,
    CreatePlaylistComponent,
    LikedSongsComponent,
    SongComponent,

    LoginComponent,
    AddComponent,
    PodcastComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminModule,

    ToastrModule.forRoot()
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
