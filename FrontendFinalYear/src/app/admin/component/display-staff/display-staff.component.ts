import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { DisplayStaffsComponent } from "../../../app/staff/display-staffs/display-staffs.component";

@Component({
    selector: 'app-display-staff',
    standalone: true,
    templateUrl: './display-staff.component.html',
    styleUrl: './display-staff.component.css',
    imports: [HeaderComponent, DisplayStaffsComponent]
})
export class DisplayStaffComponent {

}
