import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongUplodsComponent } from './board-admin/song-uplods/song-uplods.component';
import { DasBoardComponent } from './board-admin/das-board/das-board.component';
import { UsersComponent } from './board-admin/das-board/users/users.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditProfileComponent } from './board-admin/edit-profile/edit-profile.component';
import { AuthGuard } from '../_services/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserService } from '../_services/user.service';
import { FormsModule } from '@angular/forms';

export function tokenGetter(): string {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    SongUplodsComponent,
    DasBoardComponent,
    UsersComponent,
    BoardAdminComponent,
    EditProfileComponent,
    AdminLoginComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule

  ],
  providers: [AuthGuard, UserService,
  ],
})
export class AdminModule { }
