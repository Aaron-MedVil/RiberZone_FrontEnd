import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoCategoriaPage } from './producto-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoCategoriaPageRoutingModule {}
