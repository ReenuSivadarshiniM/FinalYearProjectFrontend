import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking';
import { Bookingoutput } from '../model/bookingoutput';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { }
  createNewBooking(newBooking:Booking):Observable<any>
  {
    return this.httpClient.post('http://localhost:8090/booking/new',newBooking);
  }
  getAllBookings():Observable<any>
  {
    return this.httpClient.get('http://localhost:8090/booking/car/all');
  }
  getUserBookings(usermail:string):Observable<any>
  {
    return this.httpClient.get('http://localhost:8090/booking/user/all/'+usermail);
  }
  deleteBookingById(id?:number):Observable<any>
  {
    return this.httpClient.delete('http://localhost:8090/booking/'+id);
  }
  getBookingById(id?:string|null):Observable<any>
  {
    return this.httpClient.get('http://localhost:8090/booking/'+id);
  }
  updatBooking(updateAccount:Booking)
  {
    return this.httpClient.put('http://localhost:8090/booking',updateAccount);
  }
  getBookingsByStaffEmail(staffEmail:string)
  {
    return this.httpClient.get("http://localhost:8090/booking/staff/all/"+staffEmail);
  }
  updateBookingStatus(id:string):Observable<any>
  {
    return this.httpClient.patch("http://localhost:8090/booking/done/"+id,id);
  }

}
