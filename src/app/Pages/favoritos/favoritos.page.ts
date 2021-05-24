import { Component, OnInit } from '@angular/core';
import { DataLocalStorageService } from '../../services/data-local-storage.service';
import { ProductTemplate } from '../../../assets/models/ProductTemplate';
import { LoadingController } from '@ionic/angular';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  providers: [DialogService],
})
export class FavoritosPage implements OnInit {

  favoritos: ProductTemplate[] = [];

  /**
   * Constructor de la clase
   * @param _localStorage 
   */
  constructor(private _localStorage: DataLocalStorageService, private loadingCtrl: LoadingController, private dialogService: DialogService) { }

  /**
   * Metodo que se ejecuta al iniciar la clase
   */
  ngOnInit() { this.cargarDatos(); }

  ionViewWillEnter() { this.cargarDatos(); }

  async cargarDatos() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando datos...'
    });
    await loading.present();

    this.cargarFavoritos().then(() => loading.dismiss());
  }

  private async cargarFavoritos() { await this._localStorage.cargarFavoritos().then(resp => { this.favoritos = resp }); }

  /**
   * Muestra los detalles de un producto en una ventana modal
   * @param product Datos del producto
   */
  showDialog(product: ProductTemplate) {
    const ref = this.dialogService.open(ProductDetailComponent, {
      data: { product },
      showHeader: false,
      width: '90%'
    });

    ref.onClose.subscribe(() => {this.cargarDatos();});
  }
}
