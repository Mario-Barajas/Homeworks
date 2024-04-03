import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework7Component } from './components/homework7/homework7.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [AppComponent, Homework7Component, CapitalizePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
