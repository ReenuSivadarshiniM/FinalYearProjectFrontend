import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { Bookingoutput } from '../../model/bookingoutput';
import { BookingService } from '../../services/booking.service';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { UserheadingComponent } from '../userheading/userheading.component';

@Component({
  selector: 'app-get-all-booking',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive,UserheadingComponent],
  templateUrl: './get-all-booking.component.html',
  styleUrl: './get-all-booking.component.css'
})
export class GetAllBookingComponent {
  bookings:Bookingoutput[] = [];
  message:string="";
  errorMessage:string="";
  statusMessage:string = "";
  constructor(private bookingService:BookingService,private router:Router){
    this.bookingService.getAllBookings().subscribe(
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
}
