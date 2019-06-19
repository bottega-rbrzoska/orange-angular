import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { SuperDirective } from './super.directive';

@NgModule({
  declarations: [HighlightDirective, SuperDirective],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, SuperDirective]
})
export class SharedModule { }
