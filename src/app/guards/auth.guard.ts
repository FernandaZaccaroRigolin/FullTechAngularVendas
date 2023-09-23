import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private router: Router, private jwtHelper: JwtHelperService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // verificando se existe um usuário armazenado no localStorage
      // if(!localStorage.getItem('nome_usuario')){
      //   return this.router.parseUrl('/login');
      // } else {
      //   return true;
      // }

      const token = localStorage.getItem("jwt");
      if(token && !this.jwtHelper.isTokenExpired(token)) {
        return true;
      }
      return this.router.parseUrl('/login');      

  }
  
}
