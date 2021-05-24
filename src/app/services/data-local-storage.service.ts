import { ProductTemplate } from './../../assets/models/ProductTemplate';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalStorageService {

  private _storage: Storage | null = null;
  favoritos: ProductTemplate[] = [];

  /**
   * Constructor de la clase
   * @param storage 
   */
  constructor(private storage: Storage) {
    this.init();
  }

  /**
   * Inicia los componentes del servicio
   */
  private async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  /**
   * Comprieba si existe un producto en favoritos
   * @param producto Producto a comprobar
   * @returns True si existe/False si no existe
   */
  async existeFavoritos(producto: ProductTemplate) {

    let rtn = false;

    await this.cargarFavoritos()
      .then(() => {
        this.favoritos.find(resp => {
          if (JSON.stringify(resp) === JSON.stringify(producto)) {
            rtn = true;
            return;
          }
        });
      });

    return rtn;
  }

  /**
   * Carga los datos de los productos favoritos del almacenamiento interno
   * @returns Productos favoritos
   */
  async cargarFavoritos() {
    this.favoritos = [];
    this.favoritos = await this.storage.get('favoritos') || [];
    return this.favoritos;
  }

  /**
   * Guarda un producto en favoritos
   * @param producto Producto a guardar en favoritos
   */
  async addFavoritos(producto: ProductTemplate) {
    this.favoritos.push(producto);
    await this._storage?.set('favoritos', this.favoritos);
    this.cargarFavoritos();
  }

  /**
   * Elimina un producto de favoritos
   * @param producto Producto a eliminar de favoritos
   */
  async eliminarFavoritos(producto: ProductTemplate) {

    let arrTemp = [];

    await this.cargarFavoritos()
      .then(() => {
        this.favoritos.filter(resp => {
          if (JSON.stringify(resp) !== JSON.stringify(producto)) arrTemp.push(resp);
        })
      });

    this.favoritos = arrTemp;
    await this._storage?.set('favoritos', this.favoritos);
  }
}
