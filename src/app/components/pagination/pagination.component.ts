import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Currenty } from 'src/app/models';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() public currenciesPerPage = 5;

  @Input() public selectedPage = 1;

  @Input() currentiesPage : Currenty[];

  @Input() currencies: Currenty[];

  @Output() goPage = new EventEmitter<number>();


  currentySelected: boolean = false;


  changePage(newPage: number) {
    this.selectedPage = newPage;
    console.log("page select : ", this.selectedPage);
    this.goPage.emit(this.selectedPage);
  };


  onPage(n: number): void {
    this.goPage.emit(n);
  };

  changePageSize(newSize: number) {
    this.currenciesPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.currencies.length / this.currenciesPerPage);
  }

  constructor() { }

  ngOnInit() {
  }

}

