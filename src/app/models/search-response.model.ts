import { SearchItem } from './search-item.model';

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Array<SearchItem>;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
