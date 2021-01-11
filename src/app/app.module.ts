import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { PublicationStatusDirective } from './directives/publication-status/publication-status.directive';
import { SortBarComponent } from './components/header/sort-bar/sort-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SearchResultsComponent,
    SearchItemComponent,
    LogoComponent,
    SearchInputComponent,
    PublicationStatusDirective,
    SortBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
