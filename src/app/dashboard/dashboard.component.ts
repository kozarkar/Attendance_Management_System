import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './dashboard.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formValue !: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData ! : any;
  departmentData ! : any;
  showAdd ! : boolean;
  showUpdate ! : boolean;

  constructor(private formBuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      mobile : [''],
      department : [''],
    })
    this.getAllEmployee();
    this.getAllDepartments();
  }
    clickAddEmployee(){
      this.formValue.reset();
      this.showAdd = true;
      this.showUpdate = false;


    }
    postEmployeeDetails(){
      this.employeeModelObj.firstName = this.formValue.value.firstName;
      this.employeeModelObj.lastName = this.formValue.value.lastName;
      this.employeeModelObj.email = this.formValue.value.email;
      this.employeeModelObj.mobile = this.formValue.value.mobile;
      this.employeeModelObj.departmentId = this.formValue.value.department;

      this.api.postEmployee(this.employeeModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Employee Added Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      },
        (err: any)=>{
        alert("Something went wrong");
      
      })
    }

    getAllEmployee(){
      this.api.getEmployee()
      .subscribe((res:any)=>{
        console.log(res);
        this.employeeData = res;
        
      })
    }
    getAllDepartments(){
      this.api.getAllDepartments()
      .subscribe((res:any)=>{
        console.log(res);
        this.departmentData = res;
        
      })
    }
    deleteEmployee(row : any){
      this.api.deleteEmployee(row.id)
      .subscribe(res=>{
        console.log(res);
        alert("Employee record deleted sucessfully!")
        this.getAllEmployee();
      },
      (err: any)=>{
        alert("Something went wrong");
      })
    }
    onEdit(row : any){
      this.showAdd = false;
      this.showUpdate = true;
      this.employeeModelObj.id = row.id;
      this.formValue.controls['firstName'].setValue(row.firstName);
      this.formValue.controls['lastName'].setValue(row.lastName);
      this.formValue.controls['email'].setValue(row.email);
      this.formValue.controls['mobile'].setValue(row.mobile);
      this.formValue.controls['department'].setValue(row.department.id);
    }
    updateEmployeeDetails(){
      this.employeeModelObj.firstName = this.formValue.value.firstName;
      this.employeeModelObj.lastName = this.formValue.value.lastName;
      this.employeeModelObj.email = this.formValue.value.email;
      this.employeeModelObj.mobile = this.formValue.value.mobile;
      this.employeeModelObj.departmentId = this.formValue.value.department;

      this.api.updateEmployee(this.employeeModelObj, this.employeeModelObj.id)
      .subscribe(res=>{
        alert("Updated sucessfully!");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();

      })
    }
    logOut(){
      localStorage.clear();
    }
}
