import { Component, OnInit } from '@angular/core';
//import 'rxjs/add/operator/filter';
import { ActivatedRoute } from '@angular/router';
import { Currenty, Attributes } from 'src/app/models';
import { CurrenciesService } from 'src/app/services';

@Component({
  selector: 'app-currenty-details',
  templateUrl: './currenty-details.component.html',
  styleUrls: ['./currenty-details.component.css']
})
export class CurrentyDetailsComponent implements OnInit {

  private id: string;
  public currentySelected: Currenty;

  constructor(private _route: ActivatedRoute, private _service : CurrenciesService) { }


  ngOnInit() {
    this.id = this._route.snapshot.params['id'];
    this._service.getCurrencies().subscribe(
      data => this.currentySelected = data.currencies.filter((currency : Currenty) => currency.id.toLowerCase() === this.id.toLowerCase())[0]
    );
  }
}
