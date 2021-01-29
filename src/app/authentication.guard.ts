import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import Axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const data = Axios.post('http://127.0.0.1:8000/accounts/posting',{
        email: 'ghouse.khasim1@gmaisl.com',
        password: '12345'
      });
      console.log(data);
  
      // if(data.status === 6 )
      //   return Promise.resolve(true);
      return false;
    
  }
  
}
