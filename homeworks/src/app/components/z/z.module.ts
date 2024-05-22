import { AngularMaterialModule } from '../../modules/angular-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Z1Component } from './z1/z1.component';
import { Z2Component } from './z2/z2.component';
import { Z3Component } from './z3/z3.component';

@NgModule({
  declarations: [Z1Component, Z2Component, Z3Component],
  exports: [Z1Component, Z2Component, Z3Component],
  imports: [CommonModule, AngularMaterialModule],
})
export class ZModule {}
