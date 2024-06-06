import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStaffsComponent } from './display-staffs.component';

describe('DisplayStaffsComponent', () => {
  let component: DisplayStaffsComponent;
  let fixture: ComponentFixture<DisplayStaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayStaffsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
