import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { date1 } from './date1.model';

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
      for (var item of this.list_1) {
        const ds : any = new date1();
          ds.id = item.id;
          ds.title = item.status;
          ds.startDate = new Date(item.date);
          ds.endDate = new Date(item.date);
          ds.color = "green";
          this.listdate.push(ds);
         
      } 
      console.log(this.listdate); 
    })
  }

  dataArray: any = this.listdate;

  selectDay(event:any) {
    console.log(event);
  }

  

  

}
