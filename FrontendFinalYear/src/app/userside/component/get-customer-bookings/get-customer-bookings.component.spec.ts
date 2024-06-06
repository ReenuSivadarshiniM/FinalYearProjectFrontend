import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerBookingsComponent } from './get-customer-bookings.component';

describe('GetCustomerBookingsComponent', () => {
  let component: GetCustomerBookingsComponent;
  let fixture: ComponentFixture<GetCustomerBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCustomerBookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetCustomerBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
