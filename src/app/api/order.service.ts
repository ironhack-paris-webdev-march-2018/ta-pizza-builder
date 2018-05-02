import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/toPromise";

import { PizzaIngs } from "../order-page/pizza-ings";

const baseUrl = 'http://localhost:3000'

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) { }

  sendOrder(ings: PizzaIngs) {
    return this.http.post(`${baseUrl}/api/order`, ings).toPromise();
  }

  getOne(id: string) {
    return this.http.get(`${baseUrl}/api/order/${id}`).toPromise();
  }
}

export interface OrderInterface {
  price: Number;
  updatedAt: Date
  createdAt: Date;
  tomato: boolean;
  onion: boolean;
  pepperoni: boolean;
  extraCheese: boolean;
  _id: string;
  size: string;
}
