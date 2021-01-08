import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { SearchResponse } from 'src/app/models/search-response.model';
import { response } from '../../../MOCK.response';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public searchResponse: SearchResponse = response;
  public searchResults: Array<SearchItem> = response.items;

  constructor() {

   }

  ngOnInit(): void {

  }

}
