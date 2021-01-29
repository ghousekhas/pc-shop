import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import User from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HomepageGuard implements CanActivate {
  public user: User;

  constructor(public authService: AuthService){
    this.user = authService.user;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('barara');
      console.log(this.user);
      if(this.user === undefined || this.user === null ){
      
        return false;
      }

    return true;
  }
  
}
