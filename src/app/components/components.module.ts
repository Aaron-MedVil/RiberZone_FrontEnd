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

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselProdComponent,
    ProductDetailComponent
  ],
  exports: [
    HeaderComponent,
    CarouselProdComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RippleModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    ChipModule,
    DynamicDialogModule
  ]
})
export class ComponentsModule { }
