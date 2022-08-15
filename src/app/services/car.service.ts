import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/Dto/cardetaildto';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:7228/api/';

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getall"
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrandId(brandId:number): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getbybrandid?brandId="+brandId
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsById(carId:number): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getbyid?id="+carId
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByCarId(carId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath =this.apiUrl+"cars/getcardetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColorId(colorId:number): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getbycolor?colorId="+colorId
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
    
  }
  getCarDetailsByBrandId(brandId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath =this.apiUrl+"cars/getcardetailsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailsByColorId(colorId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath =this.apiUrl+"cars/getcardetailsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailByBrandAndColor(colorId:number,brandId:number):Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl +"cars/getcardetailsbybrandAndcolor?colorId="+brandId+ "&colorId=" +colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
