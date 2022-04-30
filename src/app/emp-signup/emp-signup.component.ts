import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './emp-signup.component.html',
  styleUrls: ['./emp-signup.component.css']
})
export class EmpSignupComponent implements OnInit {

  public emp_signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.emp_signupForm = this.formBuilder.group({
      fullname:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      mobile:['', Validators.required]
    })
  }
  emp_signUp(){
    this.http.post<any>("http://localhost:3002/emp_signupUsers", this.emp_signupForm.value)
    .subscribe(res=>{
      alert("sign up successfull!");
      this.emp_signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("something went wrong!");
    })
  }
}
