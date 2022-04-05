import { ApiService } from '../shared/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  departmentData! :any;
  data! :any;
  employeeData! : any;
  name1! :any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllDepartments();
  }
  getAllDepartments(){
    this.api.getAllDepartments()
    .subscribe((res:any)=>{
      console.log(res);
      this.departmentData = res;
      
    })
  }
    getData() {
      console.log(this.data);
      this.api.getEmployeeByDepartmentId(this.data).subscribe((res:any)=>{
        this.employeeData=res;
        console.log(this.employeeData);
        this.getDepartmentName();
      })

    }
    getDepartmentName(){
      if(this.data == this.departmentData.id){
        console.log(this.name1 = this.departmentData.name);

      }
    }
  }


