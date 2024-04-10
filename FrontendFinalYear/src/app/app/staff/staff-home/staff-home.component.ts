import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StaffserviceService } from '../staffservice.service';
import { Bookingoutput } from '../../../userside/model/bookingoutput';
import { BookingService } from '../../../userside/services/booking.service';
import { Booking } from '../../../userside/model/booking';
@Component({
  selector: 'app-staff-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './staff-home.component.html',
  styleUrl: './staff-home.component.css'
})
export class StaffHomeComponent {

  bookings:Bookingoutput[] = [];
  bookingoutput:Bookingoutput=new Bookingoutput();
  bookingInput:Booking = new Booking();
  message:string="";
  errorMessage:string="";
  staffEmail:string="";


  constructor(private staffserviceService:StaffserviceService,private router:Router,private bookingService:BookingService){
    let email = localStorage.getItem("staffEmail");
    if(email!=null)
    this.staffEmail = email;
  console.log(email);
    this.bookingService.getBookingsByStaffEmail(this.staffEmail).subscribe(
      {
        next:(data:any)=>{
          console.log(data);
          this.bookings=data;
        },
        error:(err: any)=>{
          console.log(err);
        },
        complete:()=>{
          console.log("Server completed sending data");
        }
      }
    )
  }
//   completed(arg0: number|undefined) {
// throw new Error('Method not implemented.');
// }

logout()
{
  localStorage.clear();
}
completeClick(id?:number)
{
  console.log(id);
  const bookId:string = String(id);
  console.log(bookId);
  this.bookingService.updateBookingStatus(bookId).subscribe(
    {
      next:(data:any)=>{
        console.log(data);
        
      },
      error:(err: any)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("Server completed sending data");
      }
    }
  )  
}
clicked = false;
}



