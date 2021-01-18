import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/core/models/search-item.model';

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {

  transform(value: SearchItem[], sortBy: string, order: number): SearchItem[] {
    switch (sortBy) {
      case 'date':
        value.sort((a: SearchItem, b: SearchItem) =>
          (new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime()) * order);

        return value;

      case 'views':
        value.sort((a: SearchItem, b: SearchItem) => (+b.statistics.viewCount - +a.statistics.viewCount) * order);

        return value;

      default:
        return value;
    }
  }
}
