import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSidenavbarComponent } from './emp-sidenavbar.component';

describe('EmpSidenavbarComponent', () => {
  let component: EmpSidenavbarComponent;
  let fixture: ComponentFixture<EmpSidenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSidenavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
