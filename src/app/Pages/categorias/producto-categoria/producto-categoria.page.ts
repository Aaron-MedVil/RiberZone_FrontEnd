import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataLocalService } from '../../../services/data-local.service';
import { ProductTemplate } from '../../../../assets/models/ProductTemplate';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';
import { DialogService } from 'primeng/dynamicdialog';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-producto-categoria',
  templateUrl: './producto-categoria.page.html',
  styleUrls: ['./producto-categoria.page.scss'],
  providers: [DialogService],
})
export class ProductoCategoriaPage implements OnInit {

  cat: any;
  products: ProductTemplate;
  productsLocal: ProductTemplate;

  loading: any;

  /**
   * Constructor de la clase
   * @param route 
   * @param _dataLocal 
   */
  constructor(private route: ActivatedRoute, private _dataLocal: DataLocalService, private dialogService: DialogService, private loadingCtrl: LoadingController) {
    this.cat = this.route.snapshot.paramMap.get('cat').split('-');
  }

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
      .then(() => this.getProductCategory());
  }

  /**
   * Carga los datos de los productos de la categoria
   */
  private async getProductCategory() {

    await this._dataLocal.getLocalProducts()
      .then(resp => this.productsLocal = resp)
      .catch(console.error);

    //> Obtiene los datos de los productos de la categoria
    await this._dataLocal.GetProductsCategory(this.cat[0])
      .then(resp => { this.products = (!resp.hasOwnProperty('status')) ? resp : undefined; })
      // .catch(() => this.products = undefined);
      .catch(() => { this.products = this.productsLocal; });

    this.loading.dismiss();
  }

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