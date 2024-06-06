import { Component } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerServicesService } from '../../services/customer-services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-customer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './delete-customer.component.html',
  styleUrl: './delete-customer.component.css'
})
export class DeleteCustomerComponent {
  customer: Customer[]=[];
  customerEmail:string="";
  message:string="";
  errorMessage:string="";
    constructor(private customerServices: CustomerServicesService) { }
  
   
  
    ngOnInit(): void {
      // if(this.customerEmail!=null){
  
      this.customerServices.getCustomerByEmail(this.customerEmail).subscribe({
    next:(data:any)=>{
  console.log(data);
  this.customer=data;
  console.log(this.customerEmail);
    },
    error:(err:any)=>{
      console.log(err);
    }
  
    })
    }
  
    deleteCustomer(){
      //event.preventDefault();
      // console.log(this.customer);
      this.customerServices.deleteCustomer(this.customerEmail).subscribe({
        next:(data:any)=>{
        
          this.customer=this.customer.filter((a)=>a.customerEmail!=this.customerEmail);
          console.log(data);
            // this.customer=data;
          this.message="Customer deleted successfully";
          this.errorMessage="";
  
        },
        error:(err:any)=>{
  console.log(err);
  this.errorMessage=err.error;
        }
      })
    }
  }