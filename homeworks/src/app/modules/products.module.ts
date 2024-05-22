import { AngularMaterialModule } from './angular-material.module';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { PriceAdjustPipe } from '../pipes/price-adjust.pipe';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { ProductsComponent } from '../components/products/products.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';
import { RouterModule } from '@angular/router';
import { ProductFilterComponent } from '../components/product-filter/product-filter.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    PaginatorComponent,
    PriceAdjustPipe,
    ProductCardComponent,
    ProductFilterPipe,
    ReactiveFormComponent,
    ProductFilterComponent,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    FormsModule,
    NgTemplateOutlet,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
