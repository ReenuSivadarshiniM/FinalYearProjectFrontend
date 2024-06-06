import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerDetailsComponent } from './get-customer-details.component';

describe('GetCustomerDetailsComponent', () => {
  let component: GetCustomerDetailsComponent;
  let fixture: ComponentFixture<GetCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCustomerDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
