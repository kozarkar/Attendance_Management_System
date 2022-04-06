import { ApiService } from '../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { attendance } from './attendance.model';
import * as _moment from 'moment';

const moment = _moment; 


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  islist : boolean = false;
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
  postid!:number;
  defaultSelected:any;

  


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllDepartments();
  }
  getAllDepartments(){
    this.api.getAllDepartments()
    .subscribe((res:any)=>{
     // console.log(res);
      this.departmentData = res;
      
    })
  }
  
    getData() {
      this.islist = true;
      //console.log(this.data);
      this.api.getEmployeeByDepartmentId(this.data).subscribe((res:any)=>{
        this.employeeData=res;
        //console.log(this.employeeData);
      })

    }
    
    submit(){
      console.log(this.data,this.postid,this.status,this.date);
      let ds: attendance = new attendance();
      ds.status = this.status;
      ds.date = this.date;
      ds.departmentId = this.data;
      ds.postId = this.postid;
      this.list_1.push(ds);
      this.api.postAttendance(ds).subscribe((data:any)=>{});
      
      this.status = '';
      this.date = this.defaultSelected;
      this.postid = this.defaultSelected;
      }
    }
  


