import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OdooProductImagePipe } from './odoo-product-image.pipe';

const pipes = [
  OdooProductImagePipe
]

@NgModule({
  declarations: pipes,
  exports: pipes,
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
