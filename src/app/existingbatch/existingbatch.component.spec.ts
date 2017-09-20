import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingbatchComponent } from './existingbatch.component';

describe('ExistingbatchComponent', () => {
  let component: ExistingbatchComponent;
  let fixture: ComponentFixture<ExistingbatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingbatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
