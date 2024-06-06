import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Bookingoutput } from '../../model/bookingoutput';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';
import { Booking } from '../../model/booking';
import { UserheadingComponent } from '../userheading/userheading.component';

@Component({
  selector: 'app-get-user-booking',
  standalone: true,
  imports: [CommonModule,FormsModule,UserheadingComponent],
  templateUrl: './get-user-booking.component.html',
  styleUrl: './get-user-booking.component.css'
})
export class GetUserBookingComponent {
  bookings:Bookingoutput[] = [];
  bookingoutput:Bookingoutput=new Bookingoutput();
  message:string="";
  errorMessage:string="";
  usermail:string="";
  


  constructor(private bookingService:BookingService,private router:Router){
    let email = localStorage.getItem("customerEmail");
    if(email!=null)
    this.usermail = email;
    else
    alert("Please Login to view your Bookings");
    this.bookingService.getUserBookings(this.usermail).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.bookings=data;
        },
        error:(err)=>{
          console.log(err);
        },
        complete:()=>{
          console.log("Server completed sending data");
        }
      }
    )
  }
  // getUserBooking(){
    
  // }
  deleteBookingsById(id?:number){
    console.log("delete id: "+id);
    if(confirm("Do you want to delete this id "+id))
    this.bookingService.deleteBookingById(id).subscribe(
      {
        next:(resp)=>{
          console.log(resp);
          this.bookings = this.bookings.filter((a)=>a.bookId!=id)
          this.message = "Deleted Successfully";
          this.errorMessage="";
        },
        error:(err)=>{
          console.log(err);
          this.errorMessage = "Unable to delete the data";
          this.message="";
        },
        complete:()=>{
          console.log("Server completed sending data");
        }
      }
    )

  }
  updateBooking(bookingoutput:Bookingoutput)
  {
    this.router.navigateByUrl('app-update-booking/'+bookingoutput.bookId);
  }

}
