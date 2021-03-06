import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { CurrentyDetailsComponent } from './components/currenty-details/currenty-details.component';
import { FilterComponent } from './components/filter/filter.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { CounterDirective } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrenciesComponent,
    CurrentyDetailsComponent,
    FilterComponent,
    PageNotFoundComponent,
    CounterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
