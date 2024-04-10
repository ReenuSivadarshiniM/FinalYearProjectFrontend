import { RouterLink,RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { Car } from '../../modelAdmin/car';
import { HeaderComponent } from "../header/header.component";
import { CarService } from '../../serviceAdmin/car.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit, numberAttribute } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Rating } from '../../../../model/rating';
import { RatingService } from '../../../../services/rating.service';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [RouterLink, RouterLinkActive, HeaderComponent,FormsModule,CommonModule,HttpClientModule]
})
export class HomePageComponent  implements OnInit{
    date: Date = new Date(); 
    month:number=0;
    year:number=0;
    dat:number=0;
    fullDate:string = "";
    showCar: Car[]=[]; 
    showRating:Car[]=[];
    ratings:number=5;
    basicData: any;
    basicOptions: any;
    rating: any[] = [];
  
    constructor(private carService:CarService, private router:Router,private ratingService: RatingService){
      this.month = this.date.getMonth() +1;
      this.year = this.date.getFullYear();
      this.dat = this.date.getDate();
      if(this.month<10)
      this.fullDate = this.year +"-0" +this.month+"-"+this.dat;
    else
    this.fullDate = this.year +"-" +this.month+"-"+this.dat;
        this.carService.getCarDetailsByDate(this.fullDate).subscribe(
          {
            next: (data) => {
              console.log(data);
              this.showCar = data;
            },
            error: (err) => {
              console.log(err);
            },
            complete: () => {
              console.log("Server completed sending data.");
            }
        });
        this.carService.getCarDetailsByRatingStars(this.ratings).subscribe(
        {
          next: (data) => {
            console.log(data);
            this.showRating = data;
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            console.log("Server completed sending data.");
          }
           
        })
        }

    // constructor(private ratingService: RatingService) {}
  
    ngOnInit() {
      this.ratingService.getAllRating().subscribe({
        next: (data) => {
        //   this.rating = data;
          console.log('Fetched Rating Data:', this.rating); 
          for (let i = 0; i < data.length; i++) {
            const ratingObj = {    
             customerEmailId: data[i].customer.customerEmail,
             ratingId: data[i].ratingId,
             ratingStars: data[i].ratingStars,
             comments: data[i].comments,
             carModelName: data[i].car.modelName
             };
     
         this.rating.push(ratingObj);
            }
          this.processRatingData();
        },
        error: (error) => {
          console.log('Error fetching rating data:', error);
        }
      });
    }

  
    processRatingData() {

      const averageRatings = this.rating.reduce((acc: any, { carModelName, ratingStars }) => {
        console.log(carModelName,ratingStars);
        if (carModelName) {
          acc[carModelName] = acc[carModelName] || { total: 0, count: 0 };
          acc[carModelName].total += ratingStars;
          acc[carModelName].count++;
        }

        return acc;
      }, {} );

      console.log('Average Ratings:', averageRatings); // Log averageRatings object
  
      const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#49A9EA'];
  
      const labels = Object.keys(averageRatings);
      console.log(averageRatings);
      const data = labels.map((carModelName, index) => {
        const ratingData = averageRatings[carModelName];
        return ratingData ? ratingData.total / ratingData.count : null;
      });
  
      const backgroundColor = labels.map((carModelName, index) => colors[index % colors.length]);
  
      const averageData = {
        labels: labels,
        datasets: [{
          label: 'Average Rating',
          data: data,
          backgroundColor: backgroundColor,
          borderWidth: 1
        }]
      };
  
      console.log('Processed Data for Chart:', averageData); // Log processed data
  
      this.basicData = averageData;
  
      this.basicOptions = {
        plugins: {
          legend: {
            labels: {
              color: 'black'
            }
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: 'blue'
            }
          },
          x: {
            ticks: {
              color: 'green'
            }
          }
        }
      };
    }
    
}

