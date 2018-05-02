import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/toPromise";

import { PizzaIngs } from "../order-page/pizza-ings";

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  sendOrder(ings: PizzaIngs) {
    return this.http.post("http://localhost:3000/api/order", ings).toPromise();
  }
}
