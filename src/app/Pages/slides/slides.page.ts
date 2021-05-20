import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { ProductTemplate } from '../../../assets/models/ProductTemplate';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  productosMejorValorados: ProductTemplate;
  productosPopulares: ProductTemplate;
  productosBaratos: ProductTemplate;
  productosNuevos: ProductTemplate;
  todosProductos: ProductTemplate;

  //> Array datos locales
  productosLocales: ProductTemplate;

  loading: any;

  /**
   * Constructor de la clase
   * @param _dataLocal 
   */
  constructor(private _dataLocal: DataLocalService, private loadingCtrl: LoadingController) { }

  /**
   * Metodo que se ejecuta al iniciar la clase
   */
  ngOnInit() {
    this.presentLoading();
  }

  /**
   * Muestra el loader de la pagina e inicia la carga de los datos
   */
  private async presentLoading() {

    this.loading = await this.loadingCtrl.create({
      message: 'Cargando datos'
    });
    await this.loading.present()
      .then(() => this.cargaDatos());
  }

  /**
   * Carga los datos de la pagina
   */
  private async cargaDatos() {

    //> Datos de los productos generados manualmente
    await this._dataLocal.getLocalProducts()
      .then(resp => { this.productosLocales = resp; })
      .catch(console.error);

    //> Obtiene todos los productos
    await this._dataLocal.GetProductTemplate()
      .then(resp => { this.todosProductos = (!resp.hasOwnProperty('status')) ? resp : undefined; })
      .catch(() => { this.todosProductos = this.productosLocales; });

    //> Obtiene los datos de los productos populares
    await this._dataLocal.getPopularProducts()
      .then(resp => { this.productosPopulares = (!resp.hasOwnProperty('status')) ? resp : undefined; })
      .catch(() => { this.productosPopulares = this.productosLocales; });

    //> Obtiene los datos de los productos por debajo de 10€
    await this._dataLocal.getCheapProducts()
      .then(resp => { this.productosBaratos = (!resp.hasOwnProperty('status')) ? resp : undefined; })
      .catch(() => { this.productosBaratos = this.productosLocales; });

    //> Obtiene los datos de los productos nuevos
    await this._dataLocal.getNewProducts()
      .then(resp => { this.productosNuevos = (!resp.hasOwnProperty('status')) ? resp : undefined; })
      .catch(() => { this.productosNuevos = this.productosLocales; });

    //> Obtiene los datos de los productos mejor valorados
    await this._dataLocal.GetBestProducts()
      .then(resp => { this.productosMejorValorados = (!resp.hasOwnProperty('status')) ? resp : undefined; })
      .catch(() => { this.productosMejorValorados = this.productosLocales; });

    this.loading.dismiss();
  }

}
