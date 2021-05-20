import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { environmentProd } from '../../environments/environment.prod';
import { ProductTemplate } from '../../assets/models/ProductTemplate';
import { ProductCategory } from '../../assets/models/ProductCategory';

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

  /**
   * Obtiene los productos populares
   * @returns Datos de los productos
   */
  getPopularProducts() { return this.ejecutarQuery<ProductTemplate>('ProductTemplate/GetPopularProducts').toPromise(); }

  /**
   * Obtiene todos los productos
   * @returns Datos de los productos
   */
  getAllProducts() { return this.ejecutarQuery<ProductTemplate>('ProductTemplate/GetProductTemplate').toPromise(); }

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
