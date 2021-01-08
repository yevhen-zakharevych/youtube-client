import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input()
  item!: SearchItem;

  public url = '';
  public title = '';
  public viewCount = '0';
  public likeCount = '0';
  public dislikeCount = '0';
  public commentCount = '0';
  public date = '';

  constructor() { }

  ngOnInit(): void {
    this.url = this.item.snippet.thumbnails.maxres.url;
    this.title = this.item.snippet.title;
    this.viewCount = this.item.statistics.viewCount;
    this.likeCount = this.item.statistics.likeCount;
    this.dislikeCount = this.item.statistics.dislikeCount;
    this.commentCount = this.item.statistics.commentCount;
    this.date = this.item.snippet.publishedAt;
  }
}
