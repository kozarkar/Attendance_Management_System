import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  IsLoggedIn(){
    return !!localStorage.getItem('email');
  }
  IsEmpLoggedIn() {
    return !!localStorage.getItem('emp_email');
  }
}
