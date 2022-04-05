import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from'@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {

  public emp_loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.emp_loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    })
    
  }

  emp_login(){
    this.http.get<any>("http://localhost:3001/emp_signUpusers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.emp_loginForm.value.email && a.password === this.emp_loginForm.value.password
      });
      if(user){
        localStorage.setItem('emp_email', this.emp_loginForm.get('email')?.value);
    

        this.emp_loginForm.reset();
        this.router.navigate(['emp_sidenavbar/'])
      }else{
        alert("User not found!!");
      }
    },err=>{
      alert("Something went wrong");
    })
    if(this.emp_loginForm.valid){

      

    }
  }
  
}
