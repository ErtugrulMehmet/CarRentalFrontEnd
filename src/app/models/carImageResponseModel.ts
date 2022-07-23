import { CarImage } from "./carimage";
import { ResponseModel } from "./responsemodel";

export interface CarImageResponseModel extends ResponseModel{
    data:CarImage[]
}