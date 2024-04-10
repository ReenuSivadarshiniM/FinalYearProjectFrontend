import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserBookingComponent } from './get-user-booking.component';

describe('GetUserBookingComponent', () => {
  let component: GetUserBookingComponent;
  let fixture: ComponentFixture<GetUserBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetUserBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetUserBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
