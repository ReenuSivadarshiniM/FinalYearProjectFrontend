import { Component } from '@angular/core';
import { AddStaffmodel } from '../add-staffmodel';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { StaffserviceService } from '../staffservice.service';
import { UserheadingComponent } from "../../../userside/component/userheading/userheading.component";

@Component({
    selector: 'app-staff-update',
    standalone: true,
    templateUrl: './staff-update.component.html',
    styleUrl: './staff-update.component.css',
    imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule, UserheadingComponent]
})
export class StaffUpdateComponent {
  staffEmail?: string | null = "";
  message: string = "";
  errorMessage: string = "";
  staff:AddStaffmodel=new AddStaffmodel();
  constructor(private activatedRoute: ActivatedRoute, private staffserviceService: StaffserviceService) {
    this.staffEmail = this.activatedRoute.snapshot.paramMap.get('staffEmail');
    console.log(this.staffEmail);
  }
  ngOnInit(): void {
    if (this.staffEmail != null)
      this.staffserviceService.getByStaffEmail(this.staffEmail).subscribe({
        next: (data: any) => {
          console.log("Inside update"+data);
          this.staff = data;
        },
        error: (err: any) => {
          console.log(err);
        }
      })
  }
  updateStaff() {
    console.log(this.staff);
    this.staffserviceService.updateStaff(this.staff).subscribe({
      next: (data: any) => {
        console.log(data);
        this.message = "Staff updated successfully";
        this.errorMessage = "";

      },
      error: (err: any) => {
        console.log(err);
        this.errorMessage = err.error;
      }
    })
  }

}
