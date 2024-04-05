import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstModuleModule } from './modules/my-first-module/my-first-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, MyFirstModuleModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
