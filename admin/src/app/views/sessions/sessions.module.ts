import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { SharedMaterialModule } from 'app/shared/shared-material.module';

import { FlexLayoutModule } from '@angular/flex-layout';

// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SessionsRoutes } from "./sessions.routing";
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { RegistrationComponent } from './registration/registration.component';
import { Signup3Component } from './signup3/signup3.component';
import { Signup4Component } from './signup4/signup4.component';
import { Signin3Component } from './signin3/signin3.component';
import { Signin4Component } from './signin4/signin4.component';
import { AuthorizationComponent } from './autorization/autorization.component';

import { ScrollableDialogOverviewComponent } from '../../../assets/examples/material/scrollable-dialog/scrollable-dialog-overview/scrollable-dialog-overview.component';

import { SharedModule } from  '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    RouterModule.forChild(SessionsRoutes)
  ],
  declarations: [
    ScrollableDialogOverviewComponent,
    ForgotPasswordComponent, 
    LockscreenComponent, 
    SigninComponent,
    SignupComponent, 
    NotFoundComponent, 
    ErrorComponent, 
    RegistrationComponent, 
    Signup3Component, 
    Signup4Component, 
    Signin3Component, 
    Signin4Component, 
    AuthorizationComponent
  ],
  providers: [
  ],
  entryComponents: [ScrollableDialogOverviewComponent]
})
export class SessionsModule { }