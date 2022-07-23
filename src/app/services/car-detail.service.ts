import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDtoResponseModel } from '../models/Dto/cardetaildtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
apiUrl="https://localhost:7228/api/cars/getcardetails"
  constructor(private httpClient: HttpClient) { }
  
  getCarDetails():Observable<CarDetailDtoResponseModel> {
    return this.httpClient.get<CarDetailDtoResponseModel>(this.apiUrl);
  }
}