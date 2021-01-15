import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  public showSortBar = false;

  constructor() {}

  toggleSortBar(): void {
    this.showSortBar = !this.showSortBar;
  }
}
