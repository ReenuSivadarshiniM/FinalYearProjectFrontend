import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink,RouterLinkActive } from '@angular/router';
import { Rating } from '../../../../model/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RatingService } from '../../../../services/rating.service';
import { UserheadingComponent } from '../userheading/userheading.component';

@Component({
  selector: 'app-add-rating',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule,FormsModule,UserheadingComponent],
  templateUrl: './add-rating.component.html',
  styleUrl: './add-rating.component.css'
})
export class AddRatingComponent {
 newRating :Rating=new Rating();
 message: string = "";
 errorMessage: string = "";
 usermail: string="";
 modelName:string="";
 constructor(private ratingService:RatingService,private activatedRouter:ActivatedRoute){
  let email = localStorage.getItem("customerEmail");
    if(email!=null)
    this.usermail = email;
    else
    alert("Please Login to Provide a rating");
    let name = this.activatedRouter.snapshot.paramMap.get('modelName');
    console.log(name);
    if(name!=null)
    this.modelName = name;
  console.log("Book" + this.modelName);

 }
 addNewRating()
 {
  console.log("Button works")
  this.newRating.carModelName = this.modelName;
  this.newRating.customerEmailId = this.usermail;
  this.ratingService.addNewRating(this.newRating).subscribe(
    {
      next: (data) => {
        console.log(data);
        this.message = "Rating Added.";
        this.errorMessage = "";
      },
      error: (err) => {
        console.log(err);
        if (err.status == "0")
              this.errorMessage = " Network error, please try again later."
            else
              this.errorMessage = err.error;

            this.message = "";
      }
    }
  );
; }
}
