import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { EmpSignupComponent } from './emp-signup/emp-signup.component';

import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AttendanceComponent } from './attendance/attendance.component';
import { EmpSidenavbarComponent } from './emp-sidenavbar/emp-sidenavbar.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule}  from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MY_DATE_FORMATS } from './my-date-formats';
import { AttendanceRecordsComponent, DefaultPipe } from './attendance-records/attendance-records.component';


import {NgxEventCalendarModule} from 'ngx-event-calendar';


import {MatDividerModule} from '@angular/material/divider';

import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    EmpSignupComponent,
    EmpDashboardComponent,
    SidenavbarComponent,
    AttendanceComponent,
    EmpSidenavbarComponent,
    AttendanceRecordsComponent,
    DefaultPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatMomentDateModule,
    NgxEventCalendarModule,
    MatDividerModule,
    FlexLayoutModule

    
    
  ],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
