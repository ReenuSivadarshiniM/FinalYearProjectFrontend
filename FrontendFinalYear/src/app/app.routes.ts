import { Routes } from '@angular/router';
import { AddRatingComponent } from './userside/component/add-rating/add-rating.component';
import { ShowRatingComponent } from './userside/component/show-rating/show-rating.component';
import { StaffHomeComponent } from './app/staff/staff-home/staff-home.component';
import { StaffloginComponent } from './app/staff/stafflogin/stafflogin.component';
import { StaffprofileComponent } from './app/staff/staffprofile/staffprofile.component';
import { AddStaffComponent } from './app/staff/add-staff/add-staff.component';
import { UserHomePageComponent } from './userside/component/user-home-page/user-home-page.component';
import { BookingComponent } from './userside/component/booking/booking.component';
import { PageNotFoundComponent } from './userside/component/page-not-found/page-not-found.component';
import { HomePageComponent } from './admin/component/home-page/home-page.component';
import { AddCarComponent } from './admin/component/add-car/add-car.component';
import { HeaderComponent } from './admin/component/header/header.component';
import { DisplayCarComponent } from './admin/component/display-car/display-car.component';
import { UserheadingComponent } from './userside/component/userheading/userheading.component';
import { GetAllBookingComponent } from './userside/component/get-all-booking/get-all-booking.component';
import { GetUserBookingComponent } from './userside/component/get-user-booking/get-user-booking.component';
import { UpdateBookingComponent } from './userside/component/update-booking/update-booking.component';
import { DisplayCarDetailsComponent } from './userside/component/display-car-details/display-car-details.component';
import { AddCustomerComponent } from './userside/component/add-customer/add-customer.component';
import { DisplayCustomerComponent } from './userside/component/display-customer/display-customer.component';
import { UpdateCustomerComponent } from './userside/component/update-customer/update-customer.component';
import { GetCustomerDetailsComponent } from './userside/component/get-customer-details/get-customer-details.component';
import { GetCustomerBookingsComponent } from './userside/component/get-customer-bookings/get-customer-bookings.component';
import { DeleteCustomerComponent } from './userside/component/delete-customer/delete-customer.component';
import { CustomerHomePageComponent } from './userside/component/customer-home-page/customer-home-page.component';
// import { UserLoginComponent } from './userside/component/user-login/user-login.component';
import { DisplayBookingComponent } from './admin/component/display-booking/display-booking.component';
// import { AddStaffsComponent } from './admin/component/add-staffs/add-staffs.component';

import { authGuard } from './guards/auth.guard';
import { ForgotPasswordComponent } from './userside/component/forgot-password/forgot-password.component';
import { DisplayStaffsComponent } from './app/staff/display-staffs/display-staffs.component';
import { StaffUpdateComponent } from './app/staff/staff-update/staff-update.component';
import { ShowUserRatingsComponent } from './userside/component/show-user-ratings/show-user-ratings.component';
import { AddStaffsComponent } from './admin/component/add-staffs/add-staffs.component';

import { FooterComponent } from './userside/component/footer/footer.component';
import { UserLoginComponent } from './userside/component/user-login/user-login.component';


export const routes: Routes = [

    { path: 'staff-home', component: StaffHomeComponent},
{ path: 'stafflogin', component: StaffloginComponent },
{path:'staff-profile',component:StaffprofileComponent},
{path: 'add-Staff',component: AddStaffComponent},
{path:'staff-update/:staffEmail',component:StaffUpdateComponent},
{path: 'display-staffs',component:DisplayStaffsComponent},
  { path: "app-user-home-page", component: UserHomePageComponent },
  { path: "app-booking/:modelName", component: BookingComponent },
  { path: 'app-home-page', component: HomePageComponent },
  { path: 'app-add-car', component: AddCarComponent },
  { path: 'app-display-car', component: DisplayCarComponent },
  { path: 'app-header', component: HeaderComponent },
  { path: 'app-display-booking', component: DisplayBookingComponent },
  { path: 'app-userheading', component: UserheadingComponent },
  { path: 'app-get-all-booking', component: GetAllBookingComponent },
  { path: 'app-get-user-booking', component: GetUserBookingComponent },
  { path: 'app-update-booking/:id', component: UpdateBookingComponent },
  {path:'app-footer',component:FooterComponent},
  { path: 'app-display-car-details/:modelName', component: DisplayCarDetailsComponent },
  { path: 'app-add-staffs', component: AddStaffsComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'addCustomer', component: AddCustomerComponent },
  { path: 'customers', component: DisplayCustomerComponent },
  { path: 'update-customer/:customerEmail', component: UpdateCustomerComponent },
  { path: 'delete-customer', component: DeleteCustomerComponent },
  { path: 'getCustomerBookings', component: GetCustomerBookingsComponent },
  { path: 'getCustomerDetails', component: GetCustomerDetailsComponent },
  { path: 'customerHome', component: CustomerHomePageComponent },
  { path: 'app-add-rating/:modelName', component: AddRatingComponent },
  { path: 'app-show-rating', component: ShowRatingComponent },
  {path: 'app-show-user-ratings',component:ShowUserRatingsComponent},
  { path: 'app-display-booking', component: DisplayBookingComponent },
  { path: '', redirectTo: 'app-user-home-page', pathMatch: 'full' },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: '**', component: PageNotFoundComponent }


]
