import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//> Components imports
import { HeaderComponent } from './header/header.component';
import { CarouselProdComponent } from './carousel-prod/carousel-prod.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

//> primeNg imports
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ChipModule } from 'primeng/chip';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TreeModule } from 'primeng/tree';

//> Pipes imports
import { PipesModule } from '../pipes/pipes.module';
import { CardProdComponent } from './card-prod/card-prod.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselProdComponent,
    ProductDetailComponent,
    CardProdComponent
  ],
  exports: [
    HeaderComponent,
    CarouselProdComponent,
    CardProdComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RippleModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    ChipModule,
    TreeModule,
    DynamicDialogModule,
    PipesModule,
  ]
})
export class ComponentsModule { }
