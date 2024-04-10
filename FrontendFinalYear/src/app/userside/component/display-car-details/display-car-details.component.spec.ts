import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarDetailsComponent } from './display-car-details.component';

describe('DisplayCarDetailsComponent', () => {
  let component: DisplayCarDetailsComponent;
  let fixture: ComponentFixture<DisplayCarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCarDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
