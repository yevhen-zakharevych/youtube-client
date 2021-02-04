import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/core/models/search-item.model';
import { SearchResponse } from 'src/app/core/models/search-response.model';
import { Sort } from 'src/app/core/models/sort.model';
import { response } from '../../../../MOCK.response';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() sort!: Sort;
  @Input() filter!: string;

  public searchRespfonse: SearchResponse = response;
  public searchResults: Array<SearchItem> = response.items;
}
