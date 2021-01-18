import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/core/models/search-item.model';

@Pipe({ name: 'filterBy' })
export class FilterByPipe implements PipeTransform {

  transform(value: SearchItem[], filterBy: string): SearchItem[] {
    return value.filter( (searchItem: SearchItem) => searchItem.snippet.title.toLowerCase().includes(filterBy.toLowerCase()));
  }
}
