import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritosPageRoutingModule } from './favoritos-routing.module';

import { FavoritosPage } from './favoritos.page';

import { DataViewModule } from 'primeng/dataview';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { RatingModule } from 'primeng/rating';

import { PipesModule } from '../../pipes/pipes.module';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritosPageRoutingModule,
    PipesModule,
    DataViewModule,
    DynamicDialogModule,
    RatingModule,
    ComponentsModule
  ],
  declarations: [FavoritosPage]
})
export class FavoritosPageModule {}
