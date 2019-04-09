import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Currenty, Currencies } from 'src/app/models';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentySelected: boolean = false;

  @Input() title: string = "";

  currencies: Currencies;

  constructor(private _service: CurrenciesService) { }

// selectPost(post : Posts) {
//   this.postSelected = true;
//   this._route.
// }

ngOnInit() {
  this._service.getCurrencies().subscribe(
    data => this.currencies= data
  );
}

}
