import { Component } from '@angular/core';
import { Car } from '../../modelAdmin/car';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  newCar: Car = new Car();
  constructor(private router:Router){}
  icon:string="./assets/icon.png";
  addCars(newCar:Car){
  this.router.navigate(['app-add-car']);
  }
  getCars(newCar:Car){
    this.router.navigate(['app-display-car']);
  }
  getBookingDetails(){
    this.router.navigate(['app-display-booking']);
  }
  addStaff(){
    this.router.navigate(['app-add-staffs']);
  }
  deleteStaff(){
    this.router.navigate(['app-display-staff']);
  }
}
