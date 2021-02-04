import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { SortBarComponent } from './components/header/sort-bar/sort-bar.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';

const components = [
  MainNavComponent,
  LogoComponent,
  SearchInputComponent,
  SortBarComponent,
  SearchItemComponent,
  SearchResultsComponent,
  MainNavComponent,
];

@NgModule({
  declarations: components,
  imports: [SharedModule],
  exports: components,
})
export class CoreModule {}
