import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// SERVICES
import { ThemeService } from './services/theme.service';
import { NavigationService } from "./services/navigation.service";
import { RoutePartsService } from './services/route-parts.service';
import { AuthGuard } from './services/auth/auth.guard';
import { AppConfirmService } from './services/app-confirm/app-confirm.service';
import { AppLoaderService } from './services/app-loader/app-loader.service';

import { SharedComponentsModule } from './components/shared-components.module';
import { SharedPipesModule } from './pipes/shared-pipes.module';
import { SharedDirectivesModule } from './directives/shared-directives.module';

import { DataProviderAbsService } from './services/data-provider/data-provider.abs.service';
import { DataProviderService } from './services/data-provider/data-provider.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    SharedComponentsModule,
    SharedPipesModule,
    SharedDirectivesModule    
  ],
  providers: [
    ThemeService,
    NavigationService,
    RoutePartsService,
    AuthGuard,
    AppConfirmService,
    AppLoaderService,
    { provide: DataProviderAbsService, useClass: DataProviderService }
  ],
  exports: [
    SharedComponentsModule,
    SharedPipesModule,
    SharedDirectivesModule
  ]
})
export class SharedModule { }
