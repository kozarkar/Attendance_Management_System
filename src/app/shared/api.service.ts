import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {}

    postEmployee(data :any){
      return this.http.post<any>("https://my-json-server.typicode.com/kozarkar/Attendance_Management_System/posts", data)
      .pipe(map((res:any)=>{
        return res;
      }))
   }    
    getEmployee(){
      return this.http.get<any>("https://my-json-server.typicode.com/kozarkar/Attendance_Management_System/posts?_expand=department")
      .pipe(map((res:any)=>{
       return res;
    }))
 }
    updateEmployee(data :any, id : number){
      return this.http.put<any>("https://my-json-server.typicode.com/kozarkar/Attendance_Management_System/posts/"+id, data)
      .pipe(map((res:any)=>{
      return res;
      }))
   }
    deleteEmployee(id : number){
      return this.http.delete<any>("https://my-json-server.typicode.com/kozarkar/Attendance_Management_System/posts/"+id)
      .pipe(map((res:any)=>{
      return res;
    }))
 }
 getAllDepartments(){
  return this.http.get<any>("https://my-json-server.typicode.com/kozarkar/Attendance_Management_System/departments")
  .pipe(map((res:any)=>{
   return res;
}))
 }
 getEmployeeByDepartmentId(id:any){
  return this.http.get<any>("https://my-json-server.typicode.com/kozarkar/Attendance_Management_System/posts?departmentId=" +id)
  .pipe(map((res:any)=>{
   return res;
}))
 }
 getAllAttendance(){
  return this.http.get<any>("https://my-json-server.typicode.com/kozarkar/Attendance_Management_System/attendance")
  .pipe(map((res:any)=>{
   return res;
}))
 }
 postAttendance(data :any){
  return this.http.post<any>("https://my-json-server.typicode.com/kozarkar/Attendance_Management_System/attendance", data)
  .pipe(map((res:any)=>{
    return res;
  }))
} 
getAttendanceByEmpId(id:any){
  return this.http.get<any>("https://my-json-server.typicode.com/kozarkar/Attendance_Management_System/attendance?postId="+id)
  .pipe(map((res:any)=>{
   return res;
}))
 }
}
