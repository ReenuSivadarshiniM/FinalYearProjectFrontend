import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink,RouterLinkActive } from '@angular/router';
import { Car } from '../../modelAdmin/car';
import { CarService } from '../../serviceAdmin/car.service';
import { FilterPipe } from '../../../Pipes/filter.pipe';
import { FilterPriceRange } from '../../../Pipes/filter-price-range';

@Component({
    selector: 'app-display-car',
    standalone: true,
    templateUrl: './display-car.component.html',
    styleUrl: './display-car.component.css',
    imports: [HeaderComponent,FormsModule,CommonModule,RouterLink,RouterLinkActive,FilterPipe,FilterPriceRange],
})
export class DisplayCarComponent {
  message:string="";
  errorMessage:string="";
  car:Car[]=[];
  query:any;
  minprice:number=0;
  maxprice:number=0;
  constructor(private carService:CarService, private router:Router){
    this.carService.getCarDetails().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.car = data;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log("Server completed sending data.");
        }
    });
    }
    // deleteCarById(carId?:number){
    //   if(confirm("Are you sure you want to delete Car with id: "+carId))
    //   this.carService.deleteCarById(carId).subscribe(
    //   {
    //     next: (resp) => {
    //       console.log(resp);
    //       this.car = this.car.filter((a)=>a.carId!=carId);
    //       this.message="Data succesfully deleted";
    //     },
    //     error: (err) => {
    //       console.log(err);
    //       this.errorMessage = err.error;
    //       // this.errorMessage="Data could not be deleted";
    //     },
    //     complete: () => {
    //       console.log("Server completed deleting data.");
    //     }
    //   });
    // }
    // updateCar(updateCar:Car){
    //   this.router.navigateByUrl("app-update-car/"+updateCar.modelName);
    // }
}
