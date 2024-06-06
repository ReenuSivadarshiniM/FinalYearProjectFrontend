import { Component } from '@angular/core';
import { UserheadingComponent } from '../userheading/userheading.component';
import { Rating } from '../../../../model/rating';
import { RatingService } from '../../../../services/rating.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-user-ratings',
  standalone: true,
  imports: [UserheadingComponent,CommonModule,FormsModule],
  templateUrl: './show-user-ratings.component.html',
  styleUrl: './show-user-ratings.component.css'
})
export class ShowUserRatingsComponent {
  rating :Rating[]=[];
  ratingOfCustomer :Rating[]=[];
  ratingOfCarModel: Rating[]=[];
   toggle:boolean=true;
  searchBox:any;
  ratingFiltered:Rating[]=[];
   min?:number;
   max?:number;
   carModel:string="null";
   emailId:string="null";
  constructor(private ratingService:RatingService )
 {
  let email = localStorage.getItem("customerEmail");
    if(email!=null)
    this.emailId = email;
    else
    alert("Please Login to view your Ratings");

  console.log(this.carModel);
  this.ratingService.getRatingByCustomerMail(this.emailId).subscribe(
    {
      next:(data)=>{
     // console.log(data[0].customer.customerEmail);
      for (let i = 0; i < data.length; i++) {
       const ratingObj2 = {
        customerEmailId: data[i].customerEmailId,
        ratingId: data[i].ratingId,
        ratingStars: data[i].ratingStars,
        comments: data[i].comments,
        carModelName: data[i].carModelName
        };

    this.ratingOfCustomer.push(ratingObj2);
      }
      console.log(this.ratingOfCustomer);
      },
      error:(error)=>{
        console.log(error);

      }
    }
  )

  // this.ratingService.getAllRating().subscribe(
  //   {
  //     next:(data)=>{

  //     for (let i = 0; i < data.length; i++) {
  //      const ratingObj = {
  //       customerEmailId: data[i].customer.customerEmail,
  //       ratingId: data[i].ratingId,
  //       ratingStars: data[i].ratingStars,
  //       comments: data[i].comments,
  //       carModelName: data[i].car.modelName
  //       };

  //   this.rating.push(ratingObj);
  //     }
  //     console.log(this.rating);
  //     },
  //     error:(error)=>{
  //       console.log(error);
  //     }
  //   }
  // )
  }

//   getRatingByCustomerMail(emailId:string)
// {
//   console.log(this.carModel);
//   this.ratingService.getRatingByCustomerMail(emailId).subscribe(
//     {
//       next:(data)=>{
//      // console.log(data[0].customer.customerEmail);
//       for (let i = 0; i < data.length; i++) {
//        const ratingObj2 = {
//         customerEmailId: data[i].customerEmailId,
//         ratingId: data[i].ratingId,
//         ratingStars: data[i].ratingStars,
//         comments: data[i].comments,
//         carModelName: data[i].carModelName
//         };

//     this.ratingOfCustomer.push(ratingObj2);
//       }
//       console.log(this.ratingOfCustomer);
//       },
//       error:(error)=>{
//         console.log(error);

//       }
//     }
//   )
// }



}
