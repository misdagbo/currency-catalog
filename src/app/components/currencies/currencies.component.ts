import { Component, OnInit, Input, HostListener, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Currenty, Currencies } from 'src/app/models';
import { CurrenciesService } from 'src/app/services/currencies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  currentySelected: boolean = false;


  currencies: Currenty[];
  public currenciesPerPage = 5;
  public selectedPage = 1;

  currentiesPage: Currenty[];


  searchInput: string;
  filter: string;
  currentPage: number;
  pageSize: number;
  total: number;


  constructor(private _service: CurrenciesService, private _router: Router) {

  }

  goToPage(n: number): void {
    this.selectedPage = n;
    this.currencies = this.chargeCurrencies();
    this.getCurrencies();
  };


  chargeCurrencies(): Currenty[] {
    let currencies: Currenty[];
    this._service.getCurrencies().subscribe(
      data => currencies = data.currencies
    );
    return currencies;
  }


  search() {
    let currenciesObjects: Observable<Currenty[]> = this._service.getFilterCurrencies(this.searchInput, this.filter);
    currenciesObjects.subscribe(currencyList => {
      this.currencies = currencyList;
      console.log("Currencies after filter : ", this.currencies);
      this.currentiesPage;
    });
  };



  setFilter(filter) {
    this.filter = filter;
    console.log("filter : ", this.filter);
    this.search();
  }

  setSearch(search) {
    this.searchInput = search;
    console.log("searchInput", this.searchInput);
    this.search();
  }

  setPage() {
    this.getCurrencies();
  }


  selectCurrency(currenty: Currenty) {
    this.currentySelected = true;
    this._router.navigate(['currenty', currenty.id]);
  }

  getCurrencies (){
    this._service.getCurrencies().subscribe(
      data => {
        this.currencies = data.currencies;
        let pageIndex = (this.selectedPage - 1) * this.currenciesPerPage;
        this.currentiesPage = this.currencies.slice(pageIndex, pageIndex + this.currenciesPerPage);
      }
    );
  }

  ngOnInit() {

    this.getCurrencies();
  }

}
