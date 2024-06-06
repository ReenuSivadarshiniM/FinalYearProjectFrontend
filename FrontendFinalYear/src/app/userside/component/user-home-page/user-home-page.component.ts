import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { UserheadingComponent } from '../userheading/userheading.component';
import { CommonModule } from '@angular/common';
import { Car } from '../../../admin/modelAdmin/car';
import { CarService } from '../../../admin/serviceAdmin/car.service';
import { FilterPipe } from "../../../Pipes/filter.pipe";
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-user-home-page',
    standalone: true,
    templateUrl: './user-home-page.component.html',
    styleUrl: './user-home-page.component.css',
    imports: [RouterLink, RouterLinkActive, UserheadingComponent, RouterOutlet,FooterComponent, CommonModule,FormsModule, FilterPipe]
})
export class UserHomePageComponent {
  car: Car[] = [];
  imageUrl:string="";
  query:any;
  constructor(private carService: CarService, private router: Router) {
    
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
  createBooking(modelName?:string) {
    this.router.navigate(['app-booking/'+modelName]);
  }
  carDetails(modelName?:string)
  {
    this.router.navigateByUrl('app-display-car-details/'+modelName);
  }
  addRating(modelName?:string)
  {
    this.router.navigateByUrl('app-add-rating/'+modelName);
  }
}
