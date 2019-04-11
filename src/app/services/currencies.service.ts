// https://jsonplaceholder.typicode.com/posts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { Currenty, Currencies } from '../models';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private _httpClient: HttpClient) { }


  getCurrencies(): Observable<Currencies> {
    return this._httpClient
      .get<Currencies>(environment.API_URL)
      .pipe(
        tap(x => console.log(x))
      )
  };


  public getFilterCurrencies(search: string, filter: string): Observable<Currenty[]> {

    let currencies: Currenty[];

    this.getCurrencies()
      .subscribe(
        data => currencies = data.currencies
      );


    if (filter != "" && search != "") {
      if (filter == 'id') {
        let currenciesOthers: Currenty[] = currencies.filter(currency => currency.id.toLowerCase().includes(search.toLowerCase()));
        currencies = currenciesOthers;

      } else {
        let currenciesOthers: Currenty[] = currencies.filter(obj => {
          return obj.attributes[filter].toLowerCase().includes(search.toLowerCase())
        });

        currencies = currenciesOthers;
      }
    };

    let currencyObservable = new Observable<Currenty[]>(observer => {
      setTimeout(() => {
        observer.next(currencies);
      }, 1000);
    });
    return currencyObservable;
  }

  getCurrentyById(id: string): Observable<Currenty> {
    let currencies: Currenty[];

    this.getCurrencies()
      .subscribe(
        data => currencies = data.currencies.filter(currency => currency.id.toLowerCase() === id.toLowerCase())
      )

    if (currencies.length) {
      return of(currencies[0]);
    }
    return of(null);
  }

}
