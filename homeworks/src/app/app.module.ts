import { AComponent } from './components/a/a.component';
import { AngularMaterialModule } from './modules/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BComponent } from './components/b/b.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { ProductsModule } from './modules/products.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Data } from './data/ProductList.data';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent, AComponent, BComponent],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(Data, { delay: 500 }),
    ProductsModule,
  ],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}
