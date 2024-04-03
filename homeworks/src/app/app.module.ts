import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Homework6Module } from './modules/homework6/homework6.module';
import { Homework6M2Module } from './modules/homework6-m2/homework6-m2.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, Homework6Module, Homework6M2Module],
})
export class AppModule {}
