import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-prod',
  templateUrl: './card-prod.component.html',
  styleUrls: ['./card-prod.component.scss'],
})
export class CardProdComponent implements OnInit {

  @Input('products') products;

  constructor() { }

  ngOnInit() {
    console.log(this.products)
  }

}
