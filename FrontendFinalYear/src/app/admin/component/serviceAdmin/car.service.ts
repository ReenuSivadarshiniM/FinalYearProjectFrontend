// import { HttpClient } from '@angular/common/http';
// import { Booking } from '../../../userside/model/booking';
// import { Injectable } from '@angular/core';
// import { Car } from '../modelAdmin/car';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CarService {
//   constructor(private httpClient:HttpClient) { }
//   addNewCar(newCar: Car): Observable<any> {
//     return this.httpClient.post('http://localhost:8090/admin/car',newCar);
//   }
//   getCarDetails(): Observable<any>{
//     return this.httpClient.get('http://localhost:8090/admin/car/all');
//   }
//   deleteCarById(carId?:Number): Observable<any>{
//     return this.httpClient.delete('http://localhost:8090/admin/car/delete/'+carId);
//   }
//   updateCarDetails(updateCar:Car): Observable<any>{
//     return this.httpClient.put('http://localhost:8090/admin/car/update',updateCar);
//   }
//   getCarDetailsByModelName(modelName?:String|null): Observable<any>{
//     return this.httpClient.get('http://localhost:8090/admin/car/search/'+modelName);
//   }
//   // getCarDetailsByDate(date?:string):Observable<any>
//   // {
//   //   return this.httpClient.get("http://localhost:8090/admin/car/"+date);
//   // }
//   // getCarDetailsByRatingStars(ratingStars?:number):Observable<any>
//   // {
//   //   return this.httpClient.get("http://localhost:8090/admin/car/rating/"+ratingStars);
//   // }
// }
