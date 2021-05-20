import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';
import { environmentProd } from '../../environments/environment.prod';

const ImgURL = environment.imgApiUrl;
const ImgURLProd = environmentProd.imgApiUrl;

@Pipe({
  name: 'odooProductImage'
})
export class OdooProductImagePipe implements PipeTransform {

  transform(prodId: number) {
    if (!prodId) return `${ImgURLProd}default-img.png`;
    return this.formarUrl(prodId);
  }

  private formarUrl(prodId) {
    return `${ImgURL}?model=product.template&id=${prodId}&field=image_1920`;
  }

}
