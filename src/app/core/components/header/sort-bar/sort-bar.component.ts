import { Component, Output, EventEmitter } from '@angular/core';
import { Sort } from 'src/app/core/models/sort.model';

@Component({
  selector: 'app-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.scss']
})
export class SortBarComponent {

  @Output() sort = new EventEmitter<Sort>();
  @Output() filter = new EventEmitter<string>();

  sortOrder = 1;
  sortBy = '';

  public sortHandler(key: 'date' | 'views'): void {
    if (this.sortBy === key) {
      this.sortOrder *= -1;
    } else {
      this.sortBy = key;
      this.sortOrder = 1;
    }

    this.sort.emit({
      key,
      order: this.sortOrder
    });
  }

  public filterHandler(event: Event, filter: string): void {
    event.preventDefault();

    this.filter.emit(filter);
  }
}
