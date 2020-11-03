import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindiagComponent } from './logindiag.component';

describe('LogindiagComponent', () => {
  let component: LogindiagComponent;
  let fixture: ComponentFixture<LogindiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
