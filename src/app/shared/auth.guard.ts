import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : AuthService, private router : Router){}

  canActivate(){
   if( this.auth.IsLoggedIn()){
    return true;
   }  else if (this.auth.IsEmpLoggedIn()) {
     return true;

   }
   this.router.navigate(['login']);
   return false;
    
  }
  
}
