import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Staffmodel } from '../staffmodel';
import { AddStaffmodel } from '../add-staffmodel';
import { StaffserviceService } from '../staffservice.service';
import { UserheadingComponent } from "../../../userside/component/userheading/userheading.component";
@Component({
    selector: 'app-staffprofile',
    standalone: true,
    templateUrl: './staffprofile.component.html',
    styleUrl: './staffprofile.component.css',
    imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule, UserheadingComponent]
})
export class StaffprofileComponent {

  message: string = "";
  errorMessage: string = "";
  staff:AddStaffmodel=new AddStaffmodel();
    staffEmail: string = "";
  constructor(private staffserviceService: StaffserviceService, private router: Router) {
    let email = localStorage.getItem("staffEmail");
    if (email != null) {
      this.staffEmail = email;
    }
    console.log(this.staffEmail);
    this.staffserviceService.getByStaffEmail(this.staffEmail).subscribe(
      {
        next: (data) => {
          this.staff = data;
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
  updateStaff(staff: AddStaffmodel) {
    console.log(staff);
    this.router.navigateByUrl("staff-update/" + staff.staffEmail);
  }

  viewMyBookings(email?:string)
  {
    this.router.navigateByUrl("staff-home");
  }


  
}

