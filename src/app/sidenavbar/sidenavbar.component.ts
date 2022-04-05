import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay, map } from 'rxjs';
import {BreakpointObserver,  Breakpoints}  from '@angular/cdk/layout'

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  constructor(private breakpointObserver : BreakpointObserver) { }

  ngOnInit(): void {
  }

  
  logOut(){
    localStorage.clear();
  }





}
