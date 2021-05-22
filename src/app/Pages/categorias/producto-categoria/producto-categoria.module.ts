import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoCategoriaPageRoutingModule } from './producto-categoria-routing.module';

import { ProductoCategoriaPage } from './producto-categoria.page';
import {DataViewModule} from 'primeng/dataview';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoCategoriaPageRoutingModule,
    DataViewModule
  ],
  declarations: [ProductoCategoriaPage]
})
export class ProductoCategoriaPageModule {}
