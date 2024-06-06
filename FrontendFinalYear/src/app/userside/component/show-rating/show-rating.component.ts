import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Rating } from '../../../../model/rating';
import { RatingService } from '../../../../services/rating.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../Pipes/filter.pipe';
import { UserheadingComponent } from '../userheading/userheading.component';





@Component({
  selector: 'app-show-rating',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule,HttpClientModule,FormsModule,FilterPipe,UserheadingComponent],
  templateUrl: './show-rating.component.html',
  styleUrl: './show-rating.component.css'
})

export class ShowRatingComponent {

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


 //arModel:String[]=[];



 constructor(private ratingService:RatingService )
 {
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

 getRatingByCarModel(carModel:string)
{
  console.log(this.carModel);
  this.ratingService.getRatingByCarModel(carModel).subscribe(
    {
      next:(data)=>{
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
      error:(error)=>{
        console.log(error);

      }

    }
  )
}



// getRatingByCustomerMail(emailId:string)
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


  toggleFilter()
  {
    this.toggle=!this.toggle;
  }

  // deleteRatingById(id?: number) {
  //   console.log("delete id:" + id);


  // deleteRatingById(id?: number) {
  //   console.log("delete id:" + id);
  // }

  //   if (confirm("Do you want to Delete Rating id:" + id))
  //     this.ratingService.deleteRatingById(id).subscribe(
  //       {
  //         next: (data) => {
  //           console.log(data);
  //           this.rating = this.rating.filter((a) => a.ratingId != id);

  //         },
  //         error: (err) => {
  //           console.log(err);
  //         }
  //       }
  //     );
  // }

  getRatingMinMax(min?: number , max?: number)
  {
    this.toggle=!this.toggle;
    this.ratingService.getRatingsByMinAndMax(min,max).subscribe(
      {
        next:(data)=>{

          for (let i = 0; i < data.length; i++) {
            const ratingObj = {
             customerEmailId: data[i].customer.customerEmail,
             ratingId: data[i].ratingId,
             ratingStars: data[i].ratingStars,
             comments: data[i].comments,
             carModelName: data[i].car.modelName
             };

         this.ratingFiltered.push(ratingObj);
           }
           console.log(this.ratingFiltered);        },
        error: (err)=>
        {
          console.log(err);
        }
      }
    )
    this.min=0;
    this.max=0;
    this.ratingFiltered=[];
  }



}
