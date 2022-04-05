import { ApiService } from '../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { attendance } from './attendance.model';


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
  seasons: string[] = ['FullDay', 'HalfDay', 'Absent'];
  favoriteSeason!: string;
  list_1: attendance [] = [];
  date!:Date;
  status!:string;
  departmentid!:number;
  id!:number;
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
    submit(row:any){
      //console.log(row.departmentId,row.id)
      let ds: attendance = new attendance();
      ds.status = this.status;
      ds.date = this.date;
      ds.departmentId = row.departmentId;
      ds.postId = row.id;
      this.list_1.push(ds);
      this.api.postAttendance(ds).subscribe((data:any)=>{
        
      })
    }
  }


