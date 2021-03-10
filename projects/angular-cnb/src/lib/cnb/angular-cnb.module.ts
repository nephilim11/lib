import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { ButtonsModule } from './buttons/buttons.module';

export {
  ButtonsModule,
  ButtonRadioDirective,
  ButtonCheckboxDirective,
  CnbBtnDirective,
  FixedButtonCaptionDirective,
} from './buttons/index';

const MODULES = [
  ButtonsModule
];

@NgModule({
  declarations: [],
  imports: [
    ButtonsModule
  ],
  exports: MODULES,
  schemas: [NO_ERRORS_SCHEMA]
})
export class AngularCnbRootModule { }

@NgModule({ exports: MODULES })
export class CNBBootstrapModule {
  public static forRoot(): ModuleWithProviders<AngularCnbRootModule> {
    return { ngModule: AngularCnbRootModule };
  }
}
