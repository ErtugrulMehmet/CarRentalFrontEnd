import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/Dto/cardetaildto';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'https://localhost:7228/api/cars/getcardetails';

  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl);
  }
}
