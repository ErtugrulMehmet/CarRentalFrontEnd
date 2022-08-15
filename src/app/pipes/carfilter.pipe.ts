import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/Dto/cardetaildto';

@Pipe({
  name: 'carfilter'
})
export class CarfilterPipe implements PipeTransform {

  transform(value: CarDetailDto[], carFilter : string): CarDetailDto[] {
    carFilter = carFilter?carFilter.toLocaleLowerCase():"";
    return carFilter?value.filter((c:CarDetailDto)=>c.carName.toLocaleLowerCase().indexOf(carFilter)!==-1):value;
  }

}
