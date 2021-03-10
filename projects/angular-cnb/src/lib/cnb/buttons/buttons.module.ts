import { CnbBtnDirective } from './buttons.directive';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ButtonCheckboxDirective } from './checkbox.directive';
import { ButtonRadioDirective } from './radio.directive';
import { FixedButtonCaptionDirective } from './fixed-caption.directive';

@NgModule({
  declarations: [
    ButtonCheckboxDirective,
    ButtonRadioDirective,
    CnbBtnDirective,
    FixedButtonCaptionDirective,
  ],
  exports: [
    ButtonCheckboxDirective,
    ButtonRadioDirective,
    CnbBtnDirective,
    FixedButtonCaptionDirective,
  ],
})
export class ButtonsModule {
  public static forRoot(): ModuleWithProviders<ButtonsModule> {
    return { ngModule: ButtonsModule, providers: [] };
  }
}
