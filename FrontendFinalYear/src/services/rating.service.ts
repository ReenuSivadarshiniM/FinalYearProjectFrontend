import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../model/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient:HttpClient) { }

  getAllRating():Observable<any>
  {
     return this.httpClient.get('http://localhost:8090/rating/all');
  }

  getRatingByCustomerMail(email?:string):Observable<any>
  {
     return this.httpClient.get('http://localhost:8090/rating/DTO/'+email);
  }
  getRatingByCarModel(carModel?:string):Observable<any>
  {
     return this.httpClient.get('http://localhost:8090/rating/DTOCarName/'+carModel);

  }

  getRatingById(id?: number):Observable<any>
  {
    return this.httpClient.get('');
  }

  deleteRatingById(id?: number): Observable<any> {
    return this.httpClient.delete("http://localhost:8090/rating/delete/" + id);
  }

  addNewRating(newRating?:Rating): Observable<any>
  {
    return this.httpClient.post('http://localhost:8090/rating/create',newRating);
  }
  
  getRatingsByMinAndMax(min?: number, max?:number):Observable<any>
  {
    return this.httpClient.get('http://localhost:8090/rating/'+min+'/'+max);
  }
}
