import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Currenty, Currencies } from 'src/app/models';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  currentySelected: boolean = false;


  currencies: Currencies;


  public currenciesPerPage = 2;
  public selectedPage = 1;
  public selectedCategory = null;

  get currentiesPage(): Currenty[] {
    let pageIndex = (this.selectedPage - 1) * this.currenciesPerPage ;
    return this.currencies.currencies
    .slice(pageIndex, pageIndex + this.currenciesPerPage);
  };


  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.currenciesPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.currencies.currencies.length / this.currenciesPerPage);
  }

  // get pageNumbers(): number[] {
  //   return Array(Math.ceil(this.currencies.currencies.length / this.currenciesPerPage)).fill(0).map((x, i) => i + 1);
  // }






  constructor(private _service: CurrenciesService, private _router : Router) { }

  selectCurrency (currenty : Currenty){
    this.currentySelected = true;
    this._router.navigate(['currenty', currenty.id]);
    localStorage.setItem("currentySelect", JSON.stringify(currenty));
  }

  ngOnInit() {
    this._service.getCurrencies().subscribe(
      data => this.currencies= data
    );
  }
}
