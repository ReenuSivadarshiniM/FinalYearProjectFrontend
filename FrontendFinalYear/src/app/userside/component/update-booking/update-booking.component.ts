import { Component } from '@angular/core';
import { UserheadingComponent } from '../userheading/userheading.component';
import { Booking } from '../../model/booking';
import { Bookingoutput } from '../../model/bookingoutput';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../../admin/modelAdmin/car';
import { CarService } from '../../../admin/serviceAdmin/car.service';

@Component({
  selector: 'app-update-booking',
  standalone: true,
  imports: [UserheadingComponent,CommonModule,FormsModule],
  templateUrl: './update-booking.component.html',
  styleUrl: './update-booking.component.css'
})
export class UpdateBookingComponent {
  updateBooking:Bookingoutput = new Bookingoutput();
  id:string |null = "";
  message:string="";
  errorMessage:string="";
  updateBookingInput:Booking = new Booking();
  car:Car=[];

  constructor(private activatedRouter:ActivatedRoute, private bookingService:BookingService,private carService:CarService){
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    }
    
  ngOnInit():void{
    this.bookingService.getBookingById(this.id).subscribe({
      next:(data)=>{
        console.log(data);

        this.updateBooking=data;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("Complete");
      }
    });
  }
  updateBookings()
  {
    this.updateBookingInput.customerEmailId = this.updateBooking.customerEmailId;
    this.updateBookingInput.carModelName = this.updateBooking.carModelName;
    this.updateBookingInput.slotNo = this.updateBooking.slotNo;
    this.updateBookingInput.date = this.updateBooking.date;
    this.updateBookingInput.bookingDate = this.updateBooking.bookingDate;
    this.bookingService.updatBooking(this.updateBookingInput).subscribe({
      next:(data)=>{
        console.log(data);
        this.updateBookingInput = data;
        console.log(this.updateBooking.bookId);
        this.message = "Updated Successfully";
        this.errorMessage="";
      },
      error:(err)=>{
        console.log(err);
        if(err.status=="0")
          {
          this.errorMessage="Network error! please try again later";
          this.message="";
          }
          else
          {
          this.errorMessage = err.error;
          this.message="";
          }
      },
      complete:()=>
      {
        console.log("Complete");
      }
    })

    

  }


}
