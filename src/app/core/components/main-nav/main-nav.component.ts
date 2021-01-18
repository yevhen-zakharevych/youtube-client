import { Component } from '@angular/core';
import { Sort } from '../../models/sort.model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  public showSortBar = false;
  public sort: Sort = {
    key: '',
    order: 1
  };

  public filter = '';

  constructor() {}

  toggleSortBar(): void {
    this.showSortBar = !this.showSortBar;
  }
}
