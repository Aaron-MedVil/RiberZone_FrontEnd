import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoCategoriaPageRoutingModule } from './producto-categoria-routing.module';

import { ProductoCategoriaPage } from './producto-categoria.page';
import { DataViewModule } from 'primeng/dataview';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { RatingModule } from 'primeng/rating';

import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoCategoriaPageRoutingModule,
    DataViewModule,
    DynamicDialogModule,
    PipesModule,
    RatingModule
  ],
  declarations: [ProductoCategoriaPage]
})
export class ProductoCategoriaPageModule { }
