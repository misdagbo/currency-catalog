import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() private searchInput: string;
  @Input() private filter: string;
  @Output() private onChangeSearch = new EventEmitter<any>();
  @Output() private onChangeFilter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  onSearch() {
    this.onChangeSearch.emit(this.searchInput);
  }

  onFilter() {
    this.onChangeFilter.emit(this.filter);
  }
}

