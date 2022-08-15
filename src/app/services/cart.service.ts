import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { CarDetailDto } from '../models/Dto/cardetaildto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  removeFromCart(car: CarDetailDto) {
    let item = CartItems.find(c => c.car.carId === car.carId)
    CartItems.splice(CartItems.indexOf(item),1)
  }

  addToCart(car:CarDetailDto) {
    let item = CartItems.find(c => c.car.carId === car.carId)
    if (item) {
      item.quantity+=1
    } else {
      let cartItem = new CartItem()
      cartItem.car = car
      cartItem.quantity=1
      CartItems.push(cartItem)
    }

  }
  list():CartItem[] {
    return CartItems;
  }
}
