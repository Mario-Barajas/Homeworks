import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { B3Component } from './b3/b3.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../../modules/angular-material.module';
import { ZModule } from '../z/z.module';

const routes: Routes = [
  { path: 'b1', component: B1Component },
  { path: 'b2', component: B2Component },
  { path: 'b3', component: B3Component },
];

@NgModule({
  declarations: [B1Component, B2Component, B3Component],
  imports: [
    AngularMaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
    ZModule,
  ],
})
export class BModule {}
