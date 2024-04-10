import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerServicesService } from '../../services/customer-services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { UserheadingComponent } from '../userheading/userheading.component';

@Component({
  selector: 'app-get-customer-details',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive, RouterOutlet, UserheadingComponent],
  templateUrl: './get-customer-details.component.html',
  styleUrl: './get-customer-details.component.css'
})
export class GetCustomerDetailsComponent {

  message: string = "";
  errorMessage: string = "";
  customers: Customer=new Customer();
customer:Customer[]=[];
  customerEmail: string = "";
  constructor(private customerServices: CustomerServicesService, private router: Router) {
    let email = localStorage.getItem("username");
    if (email != null) {
      this.customerEmail = email;
    }
    this.customerServices.getCustomerByEmail(this.customerEmail).subscribe(
      {
        next: (data: any) => {
          this.customers = data;
          console.log(data);

          this.message = "shown successfully";
          this.errorMessage = "";

        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log("Server completed sending data.");
        }
      });
  }

  viewMyBookings(email?:string)
  {
    this.router.navigateByUrl("app-get-user-booking");
  }


  // getCustomerDetails(){

  //    this.customerServices.getCustomerByEmail(this.customerEmail).subscribe(
  //      {

  //        next: (data:any) => {
  //          this.customer=data;
  //          console.log(data);

  //          this.message="shown successfully";
  //        this.errorMessage="";

  //        },
  //        error: (err:any) => {
  //          console.log(err);
  //        },
  //        complete: () => {
  //          console.log("Server completed sending data.");
  //        }
  //    });
  //  }

  ngOnInit():void{
   const customerEmail=localStorage.getItem('customerEmail');
   if(customerEmail==undefined)
   return ;
    this.customerServices.getCustomerByEmail(customerEmail).subscribe(
      {

        next: (data:any) => {
          this.customers=data;
          console.log(data);

          this.message="shown successfully";
        this.errorMessage="";

        },
        error: (err:any) => {
          console.log(err);
        },
        complete: () => {
          console.log("Server completed sending data.");
        }
    });
  }

  deleteCustomer(customerEmail?:string){
    if(customerEmail==undefined)
    return ;
    if(confirm("Do you want to Delete account id:"+customerEmail))

    this.customerServices.deleteCustomer(customerEmail).subscribe({
      next: (data: any) => {
        console.log(data);
         this.customer=this.customer.filter((a)=>a.customerEmail!=customerEmail);
         this.customers=new Customer();
        this.message="Customer deleted successfully";
        this.errorMessage="";
        // this.customer=data;
      },
      error: (err: any) => {
        this.errorMessage = "Could not delete it";
        this.message = "";
        console.log(err);
      },
      complete: () => {
        console.log("Server completed sending data.");
      }
    });
  }

  updateCustomer(customer: Customer) {
    console.log(customer);
    this.router.navigateByUrl("update-customer/" + customer.customerEmail);
  }

  viewMyRatings()
  {
    this.router.navigateByUrl("app-show-user-ratings");
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
  

}
