import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./Pages/slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./Pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./Pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
