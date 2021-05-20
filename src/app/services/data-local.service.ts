import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { environmentProd } from '../../environments/environment.prod';
import { ProductTemplate } from '../../assets/models/ProductTemplate';
import { ProductCategory } from '../../assets/models/ProductCategory';
import { ProductAttribute } from 'src/assets/models/ProductAttribute';

const URL = environment.apiUrl;
const URLProd = environmentProd.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  /**
   * Constructor de la clase
   * @param http Servicio para request Http
   */
  constructor(private http: HttpClient) { }

  //#region Datos local
  getLocalProducts() { return this.ejecutarQueryProd<ProductTemplate>('Products.json').toPromise(); }
  getLocalCategories() { return this.ejecutarQueryProd<ProductCategory>('Categories.json').toPromise(); }
  //#endregion

  //#region Datos de los productos
  /**
   * Obtiene los productos populares
   * @returns Datos de los productos
   */
  getPopularProducts() { return this.ejecutarQuery<ProductTemplate>('ProductTemplate/GetPopularProducts').toPromise(); }

  /**
   * Obtiene todos los productos
   * @returns Datos de los productos
   */
  GetProductTemplate() { return this.ejecutarQuery<ProductTemplate>('ProductTemplate/GetProductTemplate').toPromise(); }

  /**
   * Obtiene los datos de los productos baratos
   * @returns Datos de los productos
   */
  getCheapProducts() { return this.ejecutarQuery<ProductTemplate>('ProductTemplate/GetCheapProducts').toPromise(); }

  /**
   * Obtiene los datos de los productos mejor valorados
   * @returns Datos de los productos
   */
  GetBestProducts() { return this.ejecutarQuery<ProductTemplate>('ProductTemplate/GetBestProducts').toPromise(); }

  /**
   * Obtiene los datos de los productos nuevos
   * @returns Datos de los productos
   */
  getNewProducts() { return this.ejecutarQuery<ProductTemplate>('ProductTemplate/GetNewProducts').toPromise(); }

  /**
   * Obtiene los datos de una cantidad limitada de productos
   * @param limit Cantidad de productos
   * @returns Datos de los productos
   */
  GetLimitProducts(limit) { return this.ejecutarQuery<ProductTemplate>(`ProductTemplate/GetLimitProducts?limit=${limit}`).toPromise(); }

  /**
   * Obtiene los datos de un producto
   * @param productId Identificador del producto
   * @returns Datos del producto
   */
  GetProduct(productId) { return this.ejecutarQuery<ProductTemplate>(`ProductTemplate/GetProduct?product_id=${productId}`).toPromise(); }

  /**
   * Obtiene los datos de los productos de una categoria
   * @param categId Identificador de la categoria
   * @returns Datos del producto
   */
  GetProductsCategory(categId) { return this.ejecutarQuery<ProductTemplate>(`ProductTemplate/GetProductsCategory?categId=${categId}`).toPromise(); }
  //#endregion

  //#region Variantes de los productos
  /**
   * Obtiene los datos de las variantes de un producto
   * @param productId Identificador del producto
   * @returns Datos de las variantes
   */
  GetProductAttributes(productId) { return this.ejecutarQuery<ProductAttribute>(`ProductAttribute/GetProductAttributes?product_id=${productId}`).toPromise();}
  //#endregion

  //#region Datos de las categorias
  /**
   * Obtiene todas las categorias
   * @returns Datos de las categorias
   */
  getAllCategories() { return this.ejecutarQuery<ProductCategory>('ProductCategory/GetProductCategory').toPromise(); }
  //#endregion

  //#region Execute querys
  /**
   * Ejecuta las llamadas HTTP
   * @param query Direccion de consulta al servidor
   * @returns Respuesta de la consulta
   */
  private ejecutarQueryProd<T>(query: string) { return this.http.get<T>(URLProd + query); }

  /**
   * Ejecuta las llamadas HTTP
   * @param query Direccion de consulta al servidor
   * @returns Respuesta de la consulta
   */
  private ejecutarQuery<T>(query: string) { return this.http.get<T>(URL + query); }
  //#endregion
}
