import { Component } from '@angular/core';
import { Customer } from '../../model/customer';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CustomerServicesService } from '../../services/customer-services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  message:string="";
  errorMessage:string="";
  customerEmail: string="";
  password: string="";
  confirmPassword: string="";

  constructor(private customerService: CustomerServicesService,private router:Router) {}

  forgotPassword(): void {
    if (this.password === this.confirmPassword) {
      this.customerService.forgotPassword(this.customerEmail, this.password).subscribe(
        response => {
          // this.message="Password changed successfully.";
          alert("Password changed successfully");
          this.errorMessage="";
          
          console.log(response); // Handle success message or UI update
          this.router.navigateByUrl("/login");
        },
        error => {
          this.errorMessage="Email or Password is wrong.";
          this.message="";
          console.error(error); // Handle error message
        }
      );
    } else {
      console.error("Passwords do not match.");
      this.errorMessage="Passwords do not match";
      this.message="";
    }
}
}
