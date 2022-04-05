import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from'@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    })
    
  }

  login(){
    this.http.get<any>("http://localhost:3001/signUpusers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        localStorage.setItem('email', this.loginForm.get('email')?.value);
    

        this.loginForm.reset();
        this.router.navigate(['sidenavbar/'])
      }else{
        alert("User not found!!");
      }
    },err=>{
      alert("Something went wrong");
    })
    if(this.loginForm.valid){

      

    }
  }
  
}
