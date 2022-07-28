import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {}

  // local database call : http://localhost:3000/
  // hosted db call : https://my-json-server.typicode.com/kozarkar/Attendance_Management_System/
    postEmployee(data :any){
      return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res:any)=>{
        return res;
      }))
   }    
    getEmployee(){
      return this.http.get<any>("http://localhost:3000/posts?_expand=department")
      .pipe(map((res:any)=>{
       return res;
    }))
 }
    updateEmployee(data :any, id : number){
      return this.http.put<any>("http://localhost:3000/posts/"+id, data)
      .pipe(map((res:any)=>{
      return res;
      }))
   }
    deleteEmployee(id : number){
      return this.http.delete<any>("http://localhost:3000/posts/"+id)
      .pipe(map((res:any)=>{
      return res;
    }))
 }
 getAllDepartments(){
  return this.http.get<any>("http://localhost:3000/departments")
  .pipe(map((res:any)=>{
   return res;
}))
 }
 getEmployeeByDepartmentId(id:any){
  return this.http.get<any>("http://localhost:3000/posts?departmentId=" +id)
  .pipe(map((res:any)=>{
   return res;
}))
 }
 getAllAttendance(){
  return this.http.get<any>("http://localhost:3000/attendance")
  .pipe(map((res:any)=>{
   return res;
}))
 }
 postAttendance(data :any){
  return this.http.post<any>("http://localhost:3000/attendance", data)
  .pipe(map((res:any)=>{
    return res;
  }))
} 
getAttendanceByEmpId(id:any){
  return this.http.get<any>("http://localhost:3000/attendance?postId="+id)
  .pipe(map((res:any)=>{
   return res;
}))
 }
}
