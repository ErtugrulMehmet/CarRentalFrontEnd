import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDto } from '../models/Dto/rentaldetaildto';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:7228/api/"
  constructor(private httpClient: HttpClient) { }
  
  getRentals():Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "rentals/getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }

  getRentalsById(rentalId:number):Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "rentals/getbyid?id="+rentalId
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }

  getRentalDetails():Observable<ListResponseModel<RentalDetailDto>> {
    let newPath = this.apiUrl + "rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath)
  }
  // getRentalCheckIfCanCarBeRented(carId:number,rentDate:Date,returnDate:Date):Observable<ListResponseModel<RentalDetailDto>> {
  //   let newPath = this.apiUrl + "rentals/checkifcancarberentedbetweenselecteddates?carId={{carId}}&rentDate={{rentDate}}&returnDate={{returnDate}}"
  //   return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath)
  // }

}
