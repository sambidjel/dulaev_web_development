import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileService } from './mobile-service';

import { CustomMobileAbsService } from './custom-mobile-services/custom-mobile-service/custom-mobile-abs.service';
import { CustomMobileService } from './custom-mobile-services/custom-mobile-service/custom-mobile.service';

import { MobileTopBarComponent } from './mobile-device-components/mobile-top-bar-component/mobile-top.bar.component';

// all exports related to mobile development
export * from './mobile-service';
export * from './custom-mobile-services/custom-mobile-service/custom-mobile.service';
export * from './custom-mobile-services/custom-mobile-service/custom-mobile-abs.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MobileTopBarComponent
  ],
  providers: [
    MobileService,
    { provide: CustomMobileAbsService, useClass: CustomMobileService }
  ],
  exports: [
    MobileTopBarComponent
  ]
})
export class MobileDeviceCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MobileDeviceCoreModule,
      providers: [
        MobileService,
        {provide: CustomMobileAbsService, useClass: CustomMobileService}
      ]
    };
  }
}