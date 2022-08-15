import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carimage';
import { CarDetailDto } from 'src/app/models/Dto/cardetaildto';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  carDetails: CarDetailDto[] = [];
  filterText = "";
  carId:number;
  carImages: CarImage[] = [];
  imgUrl:string="http://localhost:7228/"
  constructor(private cardetailservice: CarDetailService,
  private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.carId=(params["carId"]);
        this.getCarDetailsById(params['carId']);
      }
    });
  }
  
  getCarDetailsById(id:number) {
    this.cardetailservice.getCarDetailsById(id).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getCurrentImageClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

}
