import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeturesdetailComponent } from './leturesdetail.component';

describe('LeturesdetailComponent', () => {
  let component: LeturesdetailComponent;
  let fixture: ComponentFixture<LeturesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeturesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeturesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
