import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { playlist } from 'src/app/models/PlayList';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  playlists: playlist;
  constructor(private router: Router, private userservice: UserService, private toaster: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.playlists = {
      Title: ''
    }
  }
  Add(form: NgForm) {
    this.userservice.AddPlaylists(form.value).subscribe((result: any) => {
      if (result.Succeeded == true) {
        this.resetForm(form);
        this.toaster.success('User registration successful');
      }
      this.router.navigateByUrl('/create');
    })

  }


}
