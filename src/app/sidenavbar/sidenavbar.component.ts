import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay, map } from 'rxjs';
import {BreakpointObserver,  Breakpoints}  from '@angular/cdk/layout'

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  email:any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  constructor(private breakpointObserver : BreakpointObserver) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email_id');
  }

  
  logOut(){
    localStorage.clear();
  }





}
