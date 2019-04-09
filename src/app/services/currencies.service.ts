// https://jsonplaceholder.typicode.com/posts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {Currenty, Currencies} from '../models';
import {API_URL} from '../constants';


@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private _httpClient: HttpClient) { }


  getCurrencies() : Observable<Currencies> {
    // console.log(API_URL);
    return this._httpClient
    .get<Currencies>(API_URL)
    .pipe(
      tap(x => console.log(x))
    )
  };
}
