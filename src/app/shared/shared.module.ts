import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { PublicationStatusDirective } from './directives/publication-status/publication-status.directive';

@NgModule({
  declarations: [PublicationStatusDirective],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    PublicationStatusDirective
  ]
})
export class SharedModule { }
