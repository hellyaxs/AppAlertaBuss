import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componemts/Login/login/login.component';
import { HomeComponent } from './componemts/home/home.component';
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";
import { SidnavComponent } from './componemts/sidnav/sidnav.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgHeroiconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
