import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carimage';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {
  carImages: CarImage[] = []
  carImagesByCarId: CarImage[];
  constructor( private carImageService:CarimageService) { }

  ngOnInit(): void {
  }

  getAllCarImages() {
    this.carImageService.getAllCarImages().subscribe((response) => {
      this.carImages = response.data;
    });
  }
  getImagesByCarId(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImagesByCarId = response.data;
      
    });
  }
}

