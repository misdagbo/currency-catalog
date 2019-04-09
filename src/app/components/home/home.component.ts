import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  @Input() title: string = "Availabe currencies";


  constructor() { }

ngOnInit() {
}

}
