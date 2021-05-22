import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataLocalService } from '../../../services/data-local.service';
import { ProductTemplate } from '../../../../assets/models/ProductTemplate';

@Component({
  selector: 'app-producto-categoria',
  templateUrl: './producto-categoria.page.html',
  styleUrls: ['./producto-categoria.page.scss'],
})
export class ProductoCategoriaPage implements OnInit {

  cat: any;
  products: ProductTemplate;
  
  /**
   * Constructor de la clase
   * @param route 
   * @param _dataLocal 
   */
  constructor(private route: ActivatedRoute, private _dataLocal: DataLocalService) {
    this.cat = this.route.snapshot.paramMap.get('cat').split('-');
  }

  /**
   * Metodo que se ejecuta al iniciar la clase
   */
  ngOnInit() {
    this.getProductCategory();
  }

  /**
   * Carga los datos de los productos de la categoria
   */
  private async getProductCategory() {

    //> Obtiene los datos de los productos de la categoria
    await this._dataLocal.GetProductsCategory(this.cat[0])
      .then(resp => { this.products = (!resp.hasOwnProperty('status')) ? resp : undefined; })
      .catch(() => this.products = undefined);

    console.log(this.products);
  }

}