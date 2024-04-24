import { AngularMaterialExampleDialogComponent } from './components/angular-material-example-dialog/angular-material-example-dialog.component';
import { AngularMaterialExampleComponent } from './components/angular-material-example/angular-material-example.component';
import { AngularMaterialModule } from './modules/angular-material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AngularMaterialExampleDialogComponent,
    AngularMaterialExampleComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
