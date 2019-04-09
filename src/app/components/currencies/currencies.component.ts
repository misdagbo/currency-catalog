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
