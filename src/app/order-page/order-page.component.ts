import { Component, OnInit } from '@angular/core';

import { PizzaIngs } from './pizza-ings';

import { OrderService } from '../api/order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  ings = new PizzaIngs();

  constructor(
    private order: OrderService
  ) { }

  ngOnInit() {
  }

  orderPizza(){
    this.order.sendOrder(this.ings)
      .then(order => {
        console.log({order})
      })
      .catch(err => {
        console.log({err})
      })
  }

}
