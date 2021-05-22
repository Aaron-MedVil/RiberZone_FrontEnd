import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasPage } from './categorias.page';

const routes: Routes = [
  { path: '', component: CategoriasPage },
  { path: 'producto-categoria/:cat', loadChildren: () => import('../../Pages/categorias/producto-categoria/producto-categoria.module').then( m => m.ProductoCategoriaPageModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasPageRoutingModule {}
