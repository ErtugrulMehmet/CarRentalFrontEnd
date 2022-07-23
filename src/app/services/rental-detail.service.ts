import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from '../models/Dto/rentaldetildtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {
apiUrl="https://localhost:7228/api/rentals/getrentaldetails"
  constructor(private httpClient: HttpClient) { }
  
  getRentalDetails(): Observable<RentalDetailResponseModel>{
  return this.httpClient.get<RentalDetailResponseModel>(this.apiUrl)
}
}
