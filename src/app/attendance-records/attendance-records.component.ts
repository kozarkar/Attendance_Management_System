import { Component, OnInit, Pipe } from '@angular/core';
import { ApiService } from '../shared/api.service';


@Pipe({
  name:"color"
})

export class DefaultPipe {
  transform(value:string){
    let color = "";
    if(value == "FullDay"){
      color = "green";
    }else if(value == "HalfDay"){
      color = "yellow";
    }else{
      color = "red";
    }
    
  }
}


@Component({
  selector: 'app-attendance-records',
  templateUrl: './attendance-records.component.html',
  styleUrls: ['./attendance-records.component.css']
})
export class AttendanceRecordsComponent implements OnInit {
  list_1:any;
  departmentData! :any;
  employeeData! : any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllAttendance().subscribe((res:any)=>{
      this.list_1 = res;
    })
    this.api.getAllDepartments().subscribe((res:any)=>{
      this.departmentData = res;
    })
    this.api.getEmployee().subscribe((res:any)=>{
      this.employeeData = res;
    })
    
  }

  
    
 }

