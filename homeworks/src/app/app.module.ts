import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework5Module } from './modules/homework5/homework5.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, Homework5Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
