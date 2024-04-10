import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Staffmodel } from './staffmodel';
import { AddStaffmodel } from './add-staffmodel';
@Injectable({
  providedIn: 'root'
})
export class StaffserviceService {
  staffId: number | undefined;

  constructor(private httpClient:HttpClient) { }
  updateStaff(staff:AddStaffmodel):Observable<any>{
    return this.httpClient.put("http://localhost:8090/Staff/update",staff);
  }
  getBookingsByStaffEmail(staff: string): Observable<any> {
    return this.httpClient.get("http://localhost:8090/booking/staff/all/"+staff);
  }
  addNewStaff(staff: AddStaffmodel): Observable<any> {
    return this.httpClient.post("http://localhost:8090/staff", staff);
  }
  deleteById(staffid: number): Observable<any> {
    return this.httpClient.delete("http://localhost:8090/staff/delete/"+staffid);
  }
  getAllStaffs():Observable<any>
  {
  return this.httpClient.get('http://localhost:8090/getAllStaffs');
  }
  getByStaffEmail(staffEmail: string): Observable<any> {
    return this.httpClient.get('http://localhost:8090/getStaffbyEmail/'+staffEmail);
  }
  checkCredentials(email: string, phone: string) {
    throw this.httpClient.get('Method not implemented.');
  }
  stafflogin(staffloginDTO:any): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8090/staff/login",staffloginDTO);
  }

  // getUserBookings(usermail: string) {
  //   throw new Error('Method not implemented.');
  // }
  
}
