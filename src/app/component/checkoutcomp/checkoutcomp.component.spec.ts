import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutcompComponent } from './checkoutcomp.component';

describe('CheckoutcompComponent', () => {
  let component: CheckoutcompComponent;
  let fixture: ComponentFixture<CheckoutcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
