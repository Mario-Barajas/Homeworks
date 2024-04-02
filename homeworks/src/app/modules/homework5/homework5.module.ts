import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Homework5Component } from '../../components/homework5/homework5.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: Homework5Component }];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Homework5Module {}
