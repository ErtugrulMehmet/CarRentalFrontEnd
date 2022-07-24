import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDto } from '../models/Dto/rentaldetaildto';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {
apiUrl="https://localhost:7228/api/rentals/getrentaldetails"
  constructor(private httpClient: HttpClient) { }
  
  getRentalDetails(): Observable<ListResponseModel<RentalDetailDto>>{
  return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.apiUrl)
}
}
