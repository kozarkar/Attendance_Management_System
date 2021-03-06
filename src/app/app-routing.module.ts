import { AttendanceComponent } from './attendance/attendance.component';
import { EmpSidenavbarComponent } from './emp-sidenavbar/emp-sidenavbar.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { EmpSignupComponent } from './emp-signup/emp-signup.component';

import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceRecordsComponent } from './attendance-records/attendance-records.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'sidenavbar', component:SidenavbarComponent, canActivate:[AuthGuard], children:[
    {path: '', redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    {path: 'attendance', component:AttendanceComponent},
    {path: 'attendancerecords',component:AttendanceRecordsComponent}
  ]},
  {path: 'emp_signup', component:EmpSignupComponent},
  {path: 'emp_sidenavbar', component:EmpSidenavbarComponent, canActivate:[AuthGuard], children:[
    {path: '', component:EmpDashboardComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
