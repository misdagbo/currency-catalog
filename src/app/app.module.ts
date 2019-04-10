import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { CurrentyDetailsComponent } from './components/currenty-details/currenty-details.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FilterComponent } from './components/filter/filter.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import {HttpClientModule} from '@angular/common/http';
import { CounterDirective } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrenciesComponent,
    CurrentyDetailsComponent,
    PaginationComponent,
    FilterComponent,
    PageNotFoundComponent,
    CounterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
