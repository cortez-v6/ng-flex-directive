import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FxLayoutDirective } from './directives/fx-layout.directive';
import { FxLayoutAlignDirective } from './directives/fx-layout-align.directive';
import { FxLayoutGapDirective } from './directives/fx-layout-gap.directive';
import { FxFlexDirective } from './directives/fx-flex.directive';

@NgModule({
  declarations: [
    FxLayoutDirective,
    FxFlexDirective,
    FxLayoutAlignDirective,
    FxLayoutGapDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FxLayoutDirective,
    FxFlexDirective,
    FxLayoutAlignDirective,
    FxLayoutGapDirective
  ]
})
export class FlexLayoutModule { }
