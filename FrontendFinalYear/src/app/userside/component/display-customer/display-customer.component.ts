import { Component } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerServicesService } from '../../services/customer-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-display-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-customer.component.html',
  styleUrl: './display-customer.component.css'
})
export class DisplayCustomerComponent {
  [x: string]: any;
  customer:Customer[]=[];
  customers:Customer=new Customer();
  message:string="";
  errorMessage:string="";

  constructor(private customerServices:CustomerServicesService,private router:Router){
    this.customerServices.getAllCustomers().subscribe(
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
  

    // if(this.customers.customerEmail==undefined)
    // return;

    getCustomerByEmail(customerEmail?:string){
      if(customerEmail==undefined)
      return;
      this.customerServices.getCustomerByEmail(customerEmail).subscribe(
        {
          next: (data:any) => {
            console.log(data);
            this.customers=data;
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


    console.log("delete by id:"+customerEmail);
    if(customerEmail==undefined)
    return ;
    if(confirm("Do you want to Delete account id:"+customerEmail))
     this.customerServices.deleteCustomer(customerEmail).subscribe(
   {
      next:(data:any)=>{
       
       this.message="Deleted customer with email:"+customerEmail;
       this.errorMessage="";
   
       },
       error: (err:any) => {
         console.log(err);
         this.errorMessage="customer cannot be deleted";
         this.message="";
       }
    });
   
   }

  updateCustomer(customer:Customer){
    console.log(customer);
    this.router.navigateByUrl("update-customer/"+customer.customerEmail);
  }
  getCustomerBookings(customerEmail?:string){
    console.log(customerEmail);
    this.router.navigateByUrl("getcustomerbookings/"+customerEmail);
  }

  // getCustomerByEmail(customerEmail?:string){
  //   console.log(customerEmail);
  //   this.router.navigateByUrl("getCustomerDetails/"+customerEmail);
  // }


}
