import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {

  constructor(private httpClient:HttpClient) { 
  }

  private baseUrl = 'http://localhost:8090/customer';
    addNewCustomer(newCustomer:Customer):Observable<any>{
      return this.httpClient.post("http://localhost:8090/customer",newCustomer);
    }

    getAllCustomers():Observable<any>{
      return this.httpClient.get("http://localhost:8090/customer/AllCustomers");
    }

    updateCustomer(customer:Customer):Observable<any>{
      return this.httpClient.put("http://localhost:8090/customer/updateCustomer",customer);
    }

    getCustomerByEmail(customerEmail?:string){
      return this.httpClient.get("http://localhost:8090/customer/allCustomers/"+customerEmail);
    }

    deleteCustomer(customerEmail:string){
      return this.httpClient.delete("http://localhost:8090/customer/delete/"+customerEmail);
    }
    getCustomerBookingsByEmail(customerEmail:string){
      return this.httpClient.get("http://localhost:8090/customer/AllBookings/"+customerEmail);
    }

    login(loginDTO:any){
      return this.httpClient.post<any>("http://localhost:8090/customer/login",loginDTO);
    }
    forgotPassword(customerEmail:string,password:string){
      
      return this.httpClient.post(`${this.baseUrl}/forgotPassword/${customerEmail}/${password}`, {});
    }

  
}