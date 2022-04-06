import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {
  viewDate: Date = new Date();
  empid!: any;
  list_1:any;
  listdate:any[]=[];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.empid = localStorage.getItem('emp.id');
    this.api.getAttendanceByEmpId(this.empid).subscribe((res:any)=>{
      this.list_1 = res;
      //console.log(res);
      for (var val of this.list_1) {
        this.listdate.push(val.date);
         // prints values: 10, 20, 30, 40
      } 
      console.log(this.listdate); 
    })
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true,
    
    
    events: [
      
      { title: '', date: this.listdate },
    ]
  };
   
  

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends
  }

  

}
