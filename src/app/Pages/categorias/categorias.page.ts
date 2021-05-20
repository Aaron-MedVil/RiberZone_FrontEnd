import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { ProductCategory } from '../../../assets/models/ProductCategory';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias: ProductCategory;

  /**
   * Constructor de la clase
   * @param _dataLocal 
   */
  constructor(private _dataLocal: DataLocalService) { }

  /**
   * Metodo que se ejecuta al iniciar la clase
   */
  ngOnInit() {
    this.cargarDatos();
  }

  /**
   * Carga los datos de la pagina
   */
  private async cargarDatos() {
    await this._dataLocal.getLocalCategories()
      .then(resp => { this.categorias = resp; })
      .catch(console.error);
  }

  /**
   * Redirecciona a la pagina de productos de la categoria seleccionada
   * @param cat Categoria seleccionada
   */
  verCategoria(cat) {
    console.log(cat);
    // this.navCtrl.navigateBack(`/tabs/categories-tab/products-category/${cat.id}-${cat.name}`);
  }

}
