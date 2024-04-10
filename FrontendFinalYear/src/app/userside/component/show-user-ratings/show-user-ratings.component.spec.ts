import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserRatingsComponent } from './show-user-ratings.component';

describe('ShowUserRatingsComponent', () => {
  let component: ShowUserRatingsComponent;
  let fixture: ComponentFixture<ShowUserRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowUserRatingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowUserRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
