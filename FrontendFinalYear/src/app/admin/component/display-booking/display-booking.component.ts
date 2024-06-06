import { Component } from '@angular/core';
import { GetAllBookingComponent } from "../../../userside/component/get-all-booking/get-all-booking.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-display-booking',
    standalone: true,
    templateUrl: './display-booking.component.html',
    styleUrl: './display-booking.component.css',
    imports: [HeaderComponent,GetAllBookingComponent]
})
export class DisplayBookingComponent {

}
