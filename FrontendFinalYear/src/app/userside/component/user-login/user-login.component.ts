import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../model/customer';
import { CustomerServicesService } from '../../services/customer-services.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserheadingComponent } from '../userheading/userheading.component';


@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, CommonModule,UserheadingComponent],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  message:string="";
  errorMessage:string="";
customer: Customer=new Customer();
customerEmail:string="";
userName: string="";
password: string="";


constructor(private customerServices:CustomerServicesService,private router:Router,private http: HttpClient){}
// // this.router.navigate(['app-user-home-page']);
//   //refresh();
// }

 
  login() {
    // event.preventDefault();
    const loginDTO = { userName: this.userName, password: this.password };
    this.customerServices.login(loginDTO)
      .subscribe( {
       


        next: (data:any) => {
          localStorage.setItem('customerEmail',this.userName);
                console.log(data);
                this.message="Logged In successfully";
              this.errorMessage="";
              // this.router.navigateByUrl('/getCustomerDetails');
              //this.router.navigate(['app-user-home-page']);
              this.router.navigate(['app-user-home-page']);


//         next: (data:any) => {
//           localStorage.setItem('customerEmail',this.userName);
//                 console.log(data);
//                 this.message="Logged In successfully";
//               this.errorMessage="";
//               this.router.navigateByUrl('/getCustomerDetails');

              
                this.customer=data;
              },
              error: (err:any) => {
                this.errorMessage="Invalid username or password"
              }

      });
      // this.router.navigate(['app-user-home-page']);
  //refresh();

    }

//       });
//     }

//     // get(userName:string){
//     //   this.router.navigateByUrl("/getCustomerDetails");
//     // }
//     logout(){
//       localStorage.clear();
//     }


    forgotPassword(){
      this.router.navigateByUrl("/forgotPassword");
    }
  }
  



//     forgotPassword(){
//       this.router.navigateByUrl("/forgotPassword");
//     }



