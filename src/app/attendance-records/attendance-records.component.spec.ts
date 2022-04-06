import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceRecordsComponent } from './attendance-records.component';

describe('AttendanceRecordsComponent', () => {
  let component: AttendanceRecordsComponent;
  let fixture: ComponentFixture<AttendanceRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
