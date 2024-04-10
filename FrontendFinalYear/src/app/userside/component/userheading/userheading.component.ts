import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userheading',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './userheading.component.html',
  styleUrl: './userheading.component.css'
})
export class UserheadingComponent {
  userNameDetail: string = "";

  constructor(private router: Router) {
    this.checkUserLogin();
  }

  checkUserLogin():boolean{
    let userName = localStorage.getItem("customerEmail");
    if (userName != null){
      this.userNameDetail = userName;
      console.log("Username " + userName);
      return true;
    }
    return false;
  }
  homepage() {
    this.router.navigate(['app-user-home-page']);
  }
  booking() {
    this.router.navigate(['app-booking']);
  }
  login() {
    this.router.navigate(['login']);
  }
  register() {
    this.router.navigate(['addCustomer']);
  }
  profile() {
    this.router.navigate(['getCustomerDetails']);
  }
  logout() {
    localStorage.clear();
    this.userNameDetail="";
  }
}
