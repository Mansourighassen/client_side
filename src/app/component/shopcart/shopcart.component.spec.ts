import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcartComponent } from './shopcart.component';

describe('ShopcartComponent', () => {
  let component: ShopcartComponent;
  let fixture: ComponentFixture<ShopcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
