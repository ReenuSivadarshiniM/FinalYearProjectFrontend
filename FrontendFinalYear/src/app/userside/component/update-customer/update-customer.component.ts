import { Component } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerServicesService } from '../../services/customer-services.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserheadingComponent } from '../userheading/userheading.component';
@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [FormsModule, CommonModule, UserheadingComponent],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {
  customerEmail?: string | null = "";
  message: string = "";
  errorMessage: string = "";
  customer: Customer = new Customer();

  constructor(private activatedRouter: ActivatedRoute, private customerServices: CustomerServicesService) {
    this.customerEmail = this.activatedRouter.snapshot.paramMap.get('customerEmail');
    console.log(this.customerEmail);


  }
  ngOnInit(): void {
    if (this.customerEmail != null)
      this.customerServices.getCustomerByEmail(this.customerEmail).subscribe({
        next: (data: any) => {
          console.log("Inside update" + data);
          this.customer = data;
        },
        error: (err: any) => {
          console.log(err);
        }
      })
  }
  updateCustomer() {
    console.log(this.customer);
    this.customerServices.updateCustomer(this.customer).subscribe({
      next: (data: any) => {
        if (this.customerEmail != null) {
          error: (err: any) => {
            console.log(err);
          }
        }
      }
    })
  }


  onSubmit() {
    //event.preventDefault();
    console.log(this.customer);
    this.customerServices.updateCustomer(this.customer).subscribe({
      next: (data: any) => {
        this.customer = data;
        console.log(data);
        this.message = "Customer updated successfully";
        this.errorMessage = "";

      },
      error: (err: any) => {
        console.log(err);
        this.errorMessage = err.error;
      }
    })
  }
}

