import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../model/customer';
import { CustomerServicesService } from '../../services/customer-services.service';
import { UserheadingComponent } from '../userheading/userheading.component';

@Component({
  selector: 'app-get-customer-bookings',
  standalone: true,
  imports: [FormsModule,UserheadingComponent],
  templateUrl: './get-customer-bookings.component.html',
  styleUrl: './get-customer-bookings.component.css'
})
export class GetCustomerBookingsComponent {
  customer: Customer=new Customer();
  customerEmail:string="";
    constructor(private customerServices: CustomerServicesService) { }
  
   
  
    getCustomerBookings(){
     
      this.customerServices.getCustomerBookingsByEmail(this.customerEmail).subscribe(
        {
          next: (data:any) => {
            console.log(data);
            this.customer=data;
          },
          error: (err:any) => {
            console.log(err);
          },
          complete: () => {
            console.log("Server completed sending data.");
          }
      });
    }
}
