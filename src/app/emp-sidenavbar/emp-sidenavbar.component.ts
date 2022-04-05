import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay, map } from 'rxjs';
import {BreakpointObserver,  Breakpoints}  from '@angular/cdk/layout'

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './emp-sidenavbar.component.html',
  styleUrls: ['./emp-sidenavbar.component.css']
})
export class EmpSidenavbarComponent implements OnInit {
  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  constructor(private breakpointObserver : BreakpointObserver) { }

  ngOnInit(): void {

   // console.log(localStorage.getItem('emp_email'));
  }
  
  
  logOut(){
    localStorage.clear();
  }





}
