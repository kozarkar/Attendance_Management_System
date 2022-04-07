import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay, map } from 'rxjs';
import {BreakpointObserver,  Breakpoints}  from '@angular/cdk/layout'



@Component({
  selector: 'app-sidenavbar',
  templateUrl: './emp-sidenavbar.component.html',
  styleUrls: ['./emp-sidenavbar.component.css']
})
export class EmpSidenavbarComponent implements OnInit {
  
  dropdownValue! : string;
  email:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  constructor(private breakpointObserver : BreakpointObserver) { }

  ngOnInit(): void {

   this.email=localStorage.getItem('emp_email');
  }
  
  logOut(){
    localStorage.clear();
  }





}
