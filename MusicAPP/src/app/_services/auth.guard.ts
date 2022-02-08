//The canActivate() method from AuthGuard returns true only when the route can be navigated. In the case of a false value, 
//navigation can be redirected to the login page.

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { login } from '../models/login';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private Authguardservice: AuthService, private router: Router) { }
  canActivate(): boolean {
    if (!this.Authguardservice.gettoken()) {
      alert("Please Login to Our site")
      this.router.navigateByUrl("/login");
    }

    return this.Authguardservice.gettoken();
  }

}
