// https://jsonplaceholder.typicode.com/posts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Currenty, Currencies, CurrentyList } from '../models';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  private currentylist: CurrentyList = {
    pageSize: 5,
    total: null,
    currencies: null
  };

  constructor(private _httpClient: HttpClient) { }


  public getCurrencies(): Observable<Currencies> {
    return this._httpClient
      .get<Currencies>(environment.API_URL)
      .pipe(
        tap(x => console.log(x))
      )
  };

  public getFilterCurrencies(page: number, pageSize: number, search: string, filter: string, currenciesAll: Currenty[]): Observable<CurrentyList> {

    this.currentylist.currencies = currenciesAll;
    this.currentylist.total = currenciesAll.length;
    this.currentylist.pageSize = pageSize;

    if (filter != "" && search != "") {
      if (filter == 'id') {
        let currencies = this.currentylist.currencies.filter(currency => currency.id.toLowerCase().includes(search.toLowerCase()));
        this.currentylist.currencies = currencies;
        this.currentylist.total = currencies.length;

      } else {
        let currencies = this.currentylist.currencies.filter(obj => {
          return obj.attributes[filter].toLowerCase().includes(search.toLowerCase())
        })
        this.currentylist.currencies = currencies;
        this.currentylist.total = currencies.length;
      }
    }

    this.currentylist.pageSize = pageSize;
    let start = (page > 1) ? ((page - 1) * pageSize) : 0;
    let end = start + pageSize;
    this.currentylist.currencies = this.currentylist.currencies.slice(start, end);

    const currencyObservable = new Observable<any>(observer => {
      setTimeout(() => {
        observer.next(this.currentylist);
      }, 1000);
    });
    return currencyObservable;
  };

}
