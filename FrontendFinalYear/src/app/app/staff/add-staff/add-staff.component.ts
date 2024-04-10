import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AddStaffmodel } from '../add-staffmodel';
import { StaffserviceService } from '../staffservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Car } from '../../../admin/modelAdmin/car';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.css'
})
export class AddStaffComponent {
  newStaff: AddStaffmodel = new AddStaffmodel();
  message: string = "";
  errorMessage: string = "";
nameRef: any;
amountRef: any;
emailRef: any;
newCar:Car=new Car();
validation:boolean=true;
constructor(private staffserviceService:StaffserviceService)
  {}
  createStaff()
  {
    this.validation=true;
  console.log(this.newCar);
    console.log(this.newStaff);
    this.staffserviceService.addNewStaff(this.newStaff).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.newStaff=data;
          this.message="Success";
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
        complete:()=>{
          console.log("Server completed sending data");
        }
      }
    )
    }
}
