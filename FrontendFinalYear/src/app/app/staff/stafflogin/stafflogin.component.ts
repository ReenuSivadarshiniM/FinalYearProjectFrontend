import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { StaffserviceService } from '../staffservice.service';
import { AddStaffmodel } from '../add-staffmodel';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-stafflogin',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './stafflogin.component.html',
  styleUrl: './stafflogin.component.css'
})
export class StaffloginComponent {
  
message:string="";
errorMessage:string="";
staff: AddStaffmodel=new AddStaffmodel();
staffEmail:string="";
phoneNumber: string="";



constructor(private staffserviceService:StaffserviceService,private router:Router,private http: HttpClient){}
 
  login() {
    // event.preventDefault();
    const loginDTO = { staffEmail: this.staffEmail, phoneNumber: this.phoneNumber };
    this.staffserviceService.stafflogin(loginDTO)
      .subscribe( {
        next: (data:any) => {
          localStorage.setItem('staffEmail',this.staffEmail);
                console.log(data);
                this.message="Logged In successfully";
              this.errorMessage="";
              this.router.navigateByUrl('/staff-home');
                this.staff=data;
              },
              error: (err:any) => {
                this.errorMessage="Invalid Email or password"
              }  
      });
    }
    logout(){
      localStorage.clear();
    }
}