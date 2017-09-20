import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissiondetailComponent } from './admissiondetail.component';

describe('AdmissiondetailComponent', () => {
  let component: AdmissiondetailComponent;
  let fixture: ComponentFixture<AdmissiondetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissiondetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
