import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Homework6Component } from '../../components/homework6/homework6.component';
import { Homework6C2Component } from '../../components/homework6-c2/homework6-c2.component';
import { Homework6Service } from '../../services/homework6.service';

@NgModule({
  declarations: [Homework6Component, Homework6C2Component],
  exports: [Homework6Component, Homework6C2Component],
  imports: [CommonModule],
  providers: [Homework6Service],
})
export class Homework6Module {}
