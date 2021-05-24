import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductTemplate } from '../../../assets/models/ProductTemplate';
import { DataLocalService } from '../../services/data-local.service';
import { ProductAttribute } from '../../../assets/models/ProductAttribute';
import { DataLocalStorageService } from '../../services/data-local-storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  producto: ProductTemplate;
  atributos: ProductAttribute;

  star_icon: string = 'star-outline';
  oculto = 150;
  val: number = Math.random() * (5 - 0) + 0;
  segment: string = 'descripcion';

  /**
   * Constructor de la clase
   */
  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef, private _dataLocal: DataLocalService, private _localStorage: DataLocalStorageService, private toastCtrl: ToastController) {
    this.producto = config.data.product;
    this.comprobarEstrella();
  }

  async comprobarEstrella() {
    if (await this.checkExistsFav()) { this.star_icon = 'star'; }
  }

  /**
   * Metodo que se ejecuta al iniciar la clase
   */
  async ngOnInit() {
    this.cargarAtributos();
  }

  /**
   * Comprueba si el producto esta en favoritos
   * @returns True si existe/False no existe
   */
  async checkExistsFav() { return await this._localStorage.existeFavoritos(this.producto); }

  /**
   * Cierra la ventana modal
   */
  closeModal() { this.ref.close(); }

  /**
   * Cambia la visualizacion de segmentos
   * @param evnt Evento desencadenado
   */
  segmentChanged(evnt) { this.segment = evnt.detail.value; }

  async addRmFav() {

    let msg = '';

    if (await this.checkExistsFav()) {
      this.star_icon = 'star-outline';
      this._localStorage.eliminarFavoritos(this.producto);
      msg = 'Producto eliminado de favoritos';
    } else {
      this.star_icon = 'star';
      this._localStorage.addFavoritos(this.producto);
      msg = 'Producto añadido a favoritos';
    }

    if (msg) { this.mostrarAlertas(msg); }
  }

  /**
   * Obtiene los datos de las variantes
   */
  private async cargarAtributos() {
    await this._dataLocal.GetProductAttributes(this.producto.id)
      .then(resp => {  this.atributos = (!resp.hasOwnProperty('status')) ? resp : undefined;  })
      .catch(this.atributos = undefined);
  }

  private async mostrarAlertas(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      buttons: [{side: 'end', icon: 'close-outline', role: 'cancel'}]
    });
    await toast.present();
  }
}
