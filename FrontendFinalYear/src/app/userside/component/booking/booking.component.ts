import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Booking } from '../../model/booking';
import { BookingService } from '../../services/booking.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserheadingComponent } from '../userheading/userheading.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule, UserheadingComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  todaydate: Date = new Date();
  newBooking: Booking = new Booking();
  modelName?:string = "";
  message: string = "";
  errorMessage: string = "";
  imgUrl: string = "./assets/carImg.jpg";
  constructor(private bookingService: BookingService, private router:Router, private activatedRouter:ActivatedRoute) {
    let name = this.activatedRouter.snapshot.paramMap.get('modelName');
    console.log(name);
    if(name!=null)
    this.modelName = name;
  console.log("Book" + this.modelName);
   }
  createBooking() {
    let usermail = localStorage.getItem("customerEmail");
    if (usermail != null) {
      this.newBooking.carModelName = this.modelName;
      this.newBooking.bookingDate = this.todaydate;
      this.newBooking.customerEmailId = usermail;
      console.log(this.newBooking);
      this.bookingService.createNewBooking(this.newBooking).subscribe(
        {

          next: (data) => {
            console.log(data);
            this.newBooking = data;
            this.message = "Success";
            this.errorMessage = "";
          },
          error: (err) => {
            console.log(err);
            if (err.status == "0") {
              this.errorMessage = "Network error! please try again later";
              this.message = "";
            }
            else {
              this.errorMessage = err.error;
              this.message = "";
            }
          },
          complete: () => {
            console.log("Server completed sending data");
          }
        }
      )

    }
    else{
      alert("You need to login first to Book");
    }
  }
}
