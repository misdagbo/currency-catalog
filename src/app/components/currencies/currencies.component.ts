import { Component, OnInit, Input, HostListener, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Currenty, Currencies, CurrentyList } from 'src/app/models';
import { CurrenciesService } from 'src/app/services/currencies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {


  private currencies: Currenty[];
  public currentiesPage: Currenty[];
  public id: string;
  private selectedPage : number;
  private currenciesPerPage: number;
  public total: number;
  private searchInput: string;
  private filter: string;
  public currentySelected: boolean = false;




  constructor(private _service: CurrenciesService, private _router: Router) {
    this.selectedPage = 1;
    this.currenciesPerPage = 5;
    this.searchInput = "";
    this.filter = "";
  }


  public search = () => {
    let currenciesObs = this._service.getFilterCurrencies(this.selectedPage, this.currenciesPerPage, this.searchInput, this.filter, this.currencies);
    currenciesObs.subscribe((currencyList: CurrentyList) => {
      this.currentiesPage = currencyList.currencies;
      this.total = this.currencies.length;
    });
  }


  public setFilter = (filter : string) => {
    this.filter = filter;
    this.search();
  };

  public setSearch = (search :string) => {
    this.searchInput = search;
    this.search();
  };

  public selectCurrency = (currenty: Currenty) => {
    this.currentySelected = true;
    this._router.navigate(['currenty', currenty.id]);
  };



  public getCurrencies = () => {
    this._service.getCurrencies().subscribe(
      data => {
        this.currencies = data.currencies;
        let currenciesObs = this._service.getFilterCurrencies(this.selectedPage, this.currenciesPerPage, this.searchInput, this.filter, this.currencies);
        currenciesObs.subscribe((currencyList: CurrentyList) => {
          this.currentiesPage = currencyList.currencies;
          this.total = currencyList.total;

        });
      }
    );
  };

  public onChangeSize = () => {
    this.selectedPage = 1;
    let currenciesObs = this._service.getFilterCurrencies(this.selectedPage, this.currenciesPerPage, this.searchInput, this.filter, this.currencies);
    currenciesObs.subscribe((currencyList: CurrentyList) => {
      this.currentiesPage = currencyList.currencies;
      this.total = this.currencies.length;
    });
  };

  ngOnInit() {
    this.getCurrencies();
  }

}
