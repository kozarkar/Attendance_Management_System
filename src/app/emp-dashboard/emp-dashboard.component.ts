import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {
  viewDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  

}
