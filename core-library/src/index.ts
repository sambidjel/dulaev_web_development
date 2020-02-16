import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';
//export only mobile modules
export * from './mobile-device-core-library/mobile-device-core.module';

// core development importations and exportations
export * from './common-services.module'; // all service dependencies are loaded inside the module
export * from './common.interfaces';
/*export * from './common-pipes.module'; // all pipes are loaded inside the module

export * from './common.api.configuration'; */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  providers: [SampleService],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class CoreLibraryModule {
}
