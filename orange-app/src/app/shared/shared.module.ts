import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { SuperDirective } from './super.directive';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [HighlightDirective, SuperDirective,
                 TestDirective],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, SuperDirective, TestDirective]
})
export class SharedModule { }
