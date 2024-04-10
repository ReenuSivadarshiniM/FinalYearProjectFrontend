import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { UserheadingComponent } from '../userheading/userheading.component';

@Component({
  selector: 'app-customer-home-page',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterLink,RouterLinkActive,UserheadingComponent],
  templateUrl: './customer-home-page.component.html',
  styleUrl: './customer-home-page.component.css'
})
export class CustomerHomePageComponent {

}
