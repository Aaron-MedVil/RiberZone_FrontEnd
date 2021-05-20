import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductTemplate } from '../../../assets/models/ProductTemplate';

@Component({
  selector: 'app-carousel-prod',
  templateUrl: './carousel-prod.component.html',
  styleUrls: ['./carousel-prod.component.scss'],
  providers: [DialogService]
})
export class CarouselProdComponent implements OnInit {

  @Input('productos') productos;
  @Input('nomCateg') nomCateg;
  @Input('autoplayInterval') autoplayInterval;

  val: number = Math.random() * (5 - 0) + 0;

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 4
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  display: boolean = false;

  /**
   * Constructor de la clase
   */
  constructor(private dialogService: DialogService) { }

  /**
   * Metodo que se ejecuta al iniciar la clase
   */
  ngOnInit() { }

  /**
   * Muestra los detalles de un producto en una ventana modal
   * @param product Datos del producto
   */
  showDialog(product: ProductTemplate) {
    this.dialogService.open(ProductDetailComponent, {
      data: { product },
      showHeader: false,
      width: '90%'
    });
  }
}
