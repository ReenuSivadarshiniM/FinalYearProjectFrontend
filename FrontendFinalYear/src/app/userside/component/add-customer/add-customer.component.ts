import { Component } from '@angular/core';
import { Customer } from '../../model/customer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerServicesService } from '../../services/customer-services.service';
import { Router } from '@angular/router';
import { UserheadingComponent } from '../userheading/userheading.component';


@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule,CommonModule,UserheadingComponent],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})

export class AddCustomerComponent {

  newCustomer:Customer= new Customer();
  message:string="";
  errorMessage:string="";
  constructor(private customerServices:CustomerServicesService,private router:Router){
  }
    addCustomer(){
      console.log(this.newCustomer);
      this.customerServices.addNewCustomer(this.newCustomer)
      .subscribe(
        {
          next:(data:any)=>{
            console.log(data);
            this.message="Customer registered successfully.";
            this.errorMessage="";      
            this.router.navigateByUrl('/login');
          },
          error:(err:any)=>{
            console.log(err);
            if(err.status==0)
            this.errorMessage="Network error ! please,try again later";
  
            // this.errorMessage="Could't add Account";/
            else{
              this.errorMessage=err.error;
              this.message="";
            }
            
          },
          complete:()=>{
        
            
          }
          
        }
      );
    }
    onSubmit() {
    
     
    }

  }
