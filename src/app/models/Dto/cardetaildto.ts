import { CarImage } from "../carimage";

export interface CarDetailDto{
    carId: number,
    brandId: number,
    colorId: number,
    imagePath:string[];
    carName: string,
    brandName: string,
    colorName: string,
    modelYear:number,
    dailyPrice: number,
    description: string,
    carImages:CarImage[]
    
}