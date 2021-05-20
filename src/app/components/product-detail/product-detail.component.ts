import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductTemplate } from '../../../assets/models/ProductTemplate';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  producto: ProductTemplate;

  star: string = 'star-outline';
  oculto = 150;
  val: number = Math.random() * (5 - 0) + 0;
  segment: string = 'descripcion';

  /**
   * Constructor de la clase
   */
  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef) {
    this.producto = config.data.product;
  }

  /**
   * Metodo que se ejecuta al iniciar la clase
   */
  ngOnInit() { }

  /**
   * Cierra la ventana modal
   */
  closeModal() { this.ref.close(); }

  segmentChanged(evnt) { this.segment = evnt.detail.value; }

  addRmFav() { console.log(this.producto); }
}
