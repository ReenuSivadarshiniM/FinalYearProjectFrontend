import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { Car } from '../../modelAdmin/car';
import { CarService } from '../../serviceAdmin/car.service';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-add-car',
    standalone: true,
    templateUrl: './add-car.component.html',
    styleUrl: './add-car.component.css',
    imports: [FormsModule, CommonModule, RouterLink, RouterLinkActive, HeaderComponent]
})
export class AddCarComponent {
message:string="";
errorMessage:string="";
newCar:Car=new Car();
validation:boolean=true;
description:string='';
constructor(private carService:CarService){
}
addCar(){
  this.validation=true;
  console.log(this.newCar);

  this.carService.addNewCar(this.newCar).subscribe({
  next: (data) => {
    console.log(data);
    this.newCar = data;
    this.message= "Car succesfully added";
    this.errorMessage="";
    this.newCar={};
    this.validation=false;
  },
  error: (err) => {
    console.log(err);
    if(err.status=="0")
    {
    this.errorMessage="Network error! please try again later";
    this.message="";
    }
    else
    {
    this.errorMessage = err.error;
    this.message="";
    }
  }
});
}
clear(){
  this.newCar={};
}
}
