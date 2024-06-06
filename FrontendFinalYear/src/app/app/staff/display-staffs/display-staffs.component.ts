import { Component } from '@angular/core';
import { StaffserviceService } from '../staffservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AddStaffmodel } from '../add-staffmodel';
import { Car } from '../../../admin/modelAdmin/car';

@Component({
  selector: 'app-display-staffs',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './display-staffs.component.html',
  styleUrl: './display-staffs.component.css'
})
export class DisplayStaffsComponent {
  id?: number;
  staffid:number=0;
errorMessage: any;
message: any;
newCar:Car=new Car();
staff:AddStaffmodel[]=[];
  constructor(private staffserviceService: StaffserviceService) { 
 
  this.staffserviceService.getAllStaffs().subscribe(
    {
      next:(data)=>{
      console.log(data);
      for (let i = 0; i < data.length; i++) {
       const staffObj = {    
        staffId: data[i].staffId,
        staffName: data[i].staffName,
        phoneNumber: data[i].phoneNumber,
        staffEmail: data[i].staffEmail,
        modelName:data[i].modelName,
        };
        console.log(staffObj);


    this.staff.push(staffObj);
      }
      console.log(this.staff);
      },
      error:(error)=>{
        console.log(error);
      }
    }
  )
  }

  onDeleteAccount(id?: number) {
    console.log("delete id:" + id);
    if(id!=undefined)
    this.staffid = id;
    if (confirm("Do you want to Delete Account id:" + id))
    
      this.staffserviceService.deleteById(this.staffid).subscribe(
        {
          next: (resp) => {
            console.log(resp);
            this.staff = this.staff.filter((a)=>a.staffId!=this.staffid)
           
          },
           error: (err: any) => {
            console.log(err);
            
          }
        }
      );

}

}
