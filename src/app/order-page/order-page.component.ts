import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PizzaIngs } from "./pizza-ings";

import { OrderService, OrderInterface } from "../api/order.service";

@Component({
  selector: "app-order-page",
  templateUrl: "./order-page.component.html",
  styleUrls: ["./order-page.component.scss"]
})
export class OrderPageComponent implements OnInit {
  ings = new PizzaIngs();

  constructor(private order: OrderService, private router: Router) { }

  ngOnInit() { }

  orderPizza() {
    this.order
      .sendOrder(this.ings)
      .then((order: OrderInterface) => {
        this.router.navigateByUrl(`/order/${order._id}/success`)
      })
      .catch(err => {
        console.log({ err });
      });
  }
}
