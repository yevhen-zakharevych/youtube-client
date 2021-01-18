import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { PublicationStatusDirective } from './directives/publication-status/publication-status.directive';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';

@NgModule({
  declarations: [
    PublicationStatusDirective,
    SortByPipe,
    FilterByPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    PublicationStatusDirective,
    SortByPipe,
    FilterByPipe
  ]
})
export class SharedModule { }
