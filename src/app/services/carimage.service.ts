import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carimage';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responsemodel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {
  apiUrl = 'https://localhost:7228/';

  constructor(private httpClient: HttpClient) { }
  
  getAllCarImages(): Observable<ListResponseModel<CarImage>> {
    let newPath=this.apiUrl+"api/carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getImagesByCarId(carId:number): Observable<ListResponseModel<CarImage>> {
    let newPath=this.apiUrl+"api/carimages/getbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getImagePath(imagePath: string) {
    return this.apiUrl + imagePath
    
  }

  uploadImage(image: File, carId: number): Observable<ResponseModel> {
    let newPath = this.apiUrl + "api/carimages/add"
    const sendForm = new FormData();
    sendForm.append('carId', JSON.stringify(carId))
    sendForm.append('carImage', image, image.name)
    return this.httpClient.post<ResponseModel>(newPath, sendForm);
  }

  deleteImage(carImage: CarImage): Observable<ResponseModel> {
    let newPath = this.apiUrl + "api/carimages/delete";
    return this.httpClient.post<ResponseModel>(newPath, carImage);
  }
}
