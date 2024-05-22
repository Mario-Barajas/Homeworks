import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'a',
    component: AComponent,
    loadChildren: () =>
      import('./components/a/a.module').then((module) => module.AModule),
  },
  {
    path: 'b',
    component: BComponent,
    loadChildren: () =>
      import('./components/b/b.module').then((module) => module.BModule),
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: ':id',
        component: ProductDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
