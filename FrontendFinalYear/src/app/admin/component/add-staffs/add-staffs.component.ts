import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AddStaffComponent } from "../../../app/staff/add-staff/add-staff.component";

@Component({
    selector: 'app-add-staffs',
    standalone: true,
    templateUrl: './add-staffs.component.html',
    styleUrl: './add-staffs.component.css',
    imports: [HeaderComponent, AddStaffComponent]
})
export class AddStaffsComponent {

}
