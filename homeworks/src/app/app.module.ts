import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PipeDemoComponent } from './components/pipe-demo-component/pipe-demo-component.component.component';

@NgModule({
  declarations: [AppComponent, CapitalizePipe, PipeDemoComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
