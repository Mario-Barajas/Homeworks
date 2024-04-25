import { NgModule } from '@angular/core';
import { SimpleRouteComponent } from './components/simple-route/simple-route.component';
import { RouterModule, Routes } from '@angular/router';
import { DynamicSlugComponent } from './components/dynamic-slug/dynamic-slug.component';
import { SubRouteDetailComponent } from './components/sub-route-detail/sub-route-detail.component';

const routes: Routes = [
  {
    component: DynamicSlugComponent,
    children: [
      {
        component: SubRouteDetailComponent,
        path: ':slug',
      },
    ],
    path: 'dynamicSlug',
  },
  {
    loadChildren: () =>
      import('./modules/example-routing.module').then(
        (module) => module.ExampleRoutingModule
      ),
    path: 'lazyLoading',
  },
  {
    component: SimpleRouteComponent,
    path: 'simple',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
