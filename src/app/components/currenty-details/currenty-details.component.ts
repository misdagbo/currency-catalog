import { Component, OnInit } from '@angular/core';
//import 'rxjs/add/operator/filter';
import { ActivatedRoute } from '@angular/router';
import { Currenty } from 'src/app/models';

@Component({
  selector: 'app-currenty-details',
  templateUrl: './currenty-details.component.html',
  styleUrls: ['./currenty-details.component.css']
})
export class CurrentyDetailsComponent implements OnInit {

  id: string;
  currentySelected: Currenty;
  constructor(private _route: ActivatedRoute) { }


  ngOnInit() {
    this.id = this._route.snapshot.params['id'];
    this.currentySelected = JSON.parse(localStorage.getItem("currentySelect"));
    console.log(this.currentySelected);
    console.log(this.id);
  }

}
