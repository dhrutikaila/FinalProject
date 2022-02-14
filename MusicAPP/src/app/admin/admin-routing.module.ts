import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { DasBoardComponent } from './board-admin/das-board/das-board.component';
import { UsersComponent } from './board-admin/das-board/users/users.component';
import { SongUplodsComponent } from './board-admin/song-uplods/song-uplods.component';
import { EditProfileComponent } from './board-admin/edit-profile/edit-profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
const routes: Routes = [
  {
    path: 'admin', component: BoardAdminComponent,
    children: [{ path: 'user', component: UsersComponent },
    { path: 'dasboard', component: DasBoardComponent },
    { path: 'songup', component: SongUplodsComponent },
    { path: 'edit', component: EditProfileComponent }],
  },
  { path: 'login1', component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
