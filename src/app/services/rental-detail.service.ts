import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDto } from '../models/Dto/rentaldetaildto';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {
  apiUrl="https://localhost:7228/api/rentals/"
  constructor(private httpClient: HttpClient) { }
  
  getRentalDetails(): Observable<ListResponseModel<RentalDetailDto>>{
    let newPath=this.apiUrl+"getrentaldetails"
  return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath)
  }
  
  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath=this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
}
