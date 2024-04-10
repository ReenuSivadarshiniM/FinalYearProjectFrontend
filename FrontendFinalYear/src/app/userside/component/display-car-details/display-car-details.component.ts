import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserheadingComponent } from '../userheading/userheading.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../../admin/serviceAdmin/car.service';
import { Car } from '../../../admin/modelAdmin/car';
import { FilterPipe } from "../../../Pipes/filter.pipe";
import { Rating } from '../../../../model/rating';
import { RatingService } from '../../../../services/rating.service';

@Component({
  selector: 'app-display-car-details',
  standalone: true,
  templateUrl: './display-car-details.component.html',
  styleUrl: './display-car-details.component.css',
  imports: [CommonModule, FormsModule, UserheadingComponent, FilterPipe]
})
export class DisplayCarDetailsComponent {
  modelName: string | null = "";
  updateCars: Car = new Car();
  errorMessage: string = "";
  rating: Rating[] = [];
  ratingOfCustomer: Rating[] = [];
  ratingOfCarModel: Rating[] = [];
  toggle: boolean = true;
  searchBox: any;
  ratingFiltered: Rating[] = [];
  min?: number;
  max?: number;
  carModel: string = "null";
  emailId: string = "null";

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private router: Router, private ratingService: RatingService) 
  {
    this.modelName = this.activatedRoute.snapshot.paramMap.get('modelName');
    
  }
  ngOnInit(): void {
    this.carService.getCarDetailsByModelName(this.modelName).subscribe({
      next: (data) => {
        console.log(data);
        this.updateCars = data;
        console.log(this.updateCars);
      },
      error: (err) => {
        console.log(err);
        if (err.status == "0") {
          this.errorMessage = "Network error! please try again later";
        }
        else {
          this.errorMessage = err.error;
        }
      },
      complete: () => {
        console.log("Server completed sending data.");
      }
    });

    if (this.modelName != null) {
      console.log("Modelname: " +this.modelName);
      this.ratingService.getRatingByCarModel(this.modelName).subscribe(
        {
          next: (data) => {
            console.log(data[0].carModelName);
            for (let i = 0; i < data.length; i++) {
              const ratingObj1 = {
                customerEmailId: data[i].customerEmailId,
                ratingId: data[i].ratingId,
                ratingStars: data[i].ratingStars,
                comments: data[i].comments,
                carModelName: data[i].carModelName
              };

              this.ratingOfCustomer.push(ratingObj1);
            }
            console.log(this.ratingOfCustomer);
          },
          error: (error) => {
            console.log(error);

          }

        }

      )
    }
  }


  booking(modelName?:string) {
    this.router.navigate(['app-booking/'+modelName]);
  }
  ratenow(modelName?:string)
  {
    this.router.navigateByUrl('app-add-rating/'+modelName);
  }


}
