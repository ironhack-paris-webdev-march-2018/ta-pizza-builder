import { Component, OnInit } from '@angular/core';
import { OrderService, OrderInterface } from "../api/order.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {
  orderData: OrderInterface

  constructor(
    private order: OrderService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fetchOrderData(params.get("id"))
    })
  }

  fetchOrderData(id) {
    this.order.getOne(id)
      .then((orderData: OrderInterface) => {
        this.orderData = orderData
      })
      .catch(err => {
        console.log(err)
      })
  }

}

