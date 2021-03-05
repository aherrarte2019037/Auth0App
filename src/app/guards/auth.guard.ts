import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth0: AuthService, private router: Router ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
      let isLogged: boolean;
      this.auth0.isAuthenticated$.subscribe( value => isLogged = value );
      
      if(isLogged === true){
        return true;

      }else {
        this.router.navigate(['home']);
        return false;
      }

  }
  
}