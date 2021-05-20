import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductTemplate } from '../../../assets/models/ProductTemplate';
import { DataLocalService } from '../../services/data-local.service';
import { TreeNode } from 'primeng/api';
import { ProductAttribute } from '../../../assets/models/ProductAttribute';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  producto: ProductTemplate;
  atributos: ProductAttribute;

  star: string = 'star-outline';
  oculto = 150;
  val: number = Math.random() * (5 - 0) + 0;
  segment: string = 'descripcion';

  /**
   * Constructor de la clase
   */
  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef, private _dataLocal: DataLocalService) {
    this.producto = config.data.product;
  }

  /**
   * Metodo que se ejecuta al iniciar la clase
   */
  ngOnInit() {
    this.cargarAtributos();
  }

  /**
   * Cierra la ventana modal
   */
  closeModal() { this.ref.close(); }

  /**
   * Cambia la visualizacion de segmentos
   * @param evnt Evento desencadenado
   */
  segmentChanged(evnt) { this.segment = evnt.detail.value; }

  addRmFav() { console.log(this.producto); }

  /**
   * Obtiene los datos de las variantes
   */
  private async cargarAtributos() {
    await this._dataLocal.GetProductAttributes(this.producto.id)
      .then(resp => {  this.atributos = (!resp.hasOwnProperty('status')) ? resp : undefined;  })
      .catch(this.atributos = undefined);
  }
}
