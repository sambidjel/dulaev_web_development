import { CustomValidators } from 'ng2-validation';
import { HttpClient, HttpRequest } from '@angular/common/http'
import { MatDialog } from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';
import { Validators, FormGroup, NgForm, FormGroupDirective, FormControl, AbstractControl, ValidationErrors } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ScrollableDialogOverviewComponent } from '../../../../assets/examples/material/scrollable-dialog/scrollable-dialog-overview/scrollable-dialog-overview.component';
import { InputOptions } from '../../../shared/interfaces';


import { HttpActionConfig } from 'core-library';
import { DataProviderAbsService } from  '../../../shared/services/data-provider/data-provider.abs.service';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  firstnameInputOptions:InputOptions;
  lastnameInputOptions:InputOptions;
  companynameInputOptions:InputOptions;
  phonenumberInputOptions:InputOptions;
  emailInputOptions:InputOptions;
  companydescriptionInputOptions:InputOptions;
  firstnameControl:FormControl;
  lastnameControl:FormControl;
  companynameControl:FormControl;
  phonenumberControl:FormControl;
  emailControl:FormControl;
  companydescriptionControl:FormControl;
  registrationDataGroup: FormGroup;

  constructor(
    private dataProvider: DataProviderAbsService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ){
    this.firstnameInputOptions = {
      label: 'Имя',
      appearance: 'outline',
      placeholder: 'введите ваше имя',
      fxFlex:'1 1 0%',
      type: 'text'
    }
    this.lastnameInputOptions = {
      label: 'Фамилия',
      appearance: 'outline',
      placeholder: 'введите вашу фамилию',
      fxFlex:'1 1 0%',
      type: 'text'
    }
    this.companynameInputOptions = {
      label: 'Название вашей организации',
      appearance: 'outline',
      placeholder: 'Название вашей организации',
      type: 'text'
    }
    this.phonenumberInputOptions = {
      label: 'Номер телефона',
      appearance: 'outline',
      placeholder: 'введите 10-и значный номер телефона',
      type: 'text'
    }
    this.emailInputOptions = {
      label: 'Электронная почта',
      appearance: 'outline',
      placeholder: 'введите адрес вашей почты',
      type: 'text'
    }
    this.companydescriptionInputOptions = {
      label: 'Опишите кратко структуру вашего бизнеса',
      className: 'inputText',
      appearance: 'outline',
      placeholder: 'Опишите кратко структуру вашего бизнеса',
      type: 'text'
    }
    this.firstnameControl = new FormControl('',Validators.required);
    this.lastnameControl = new FormControl('',Validators.required);
    this.companynameControl = new FormControl('',Validators.required);
    this.phonenumberControl = new FormControl('',Validators.required);
    this.emailControl = new FormControl('',Validators.required);
    this.companydescriptionControl = new FormControl('',Validators.required);
    this.registrationDataGroup = this.formBuilder.group(
    {
      firstname: this.firstnameControl,
      lastname: this.lastnameControl,
      companyname: this.companynameControl,
      phonenumber: this.phonenumberControl,
      email: this.emailControl,
      companydescription: this.companydescriptionControl,
    });
  }

  ngOnInit() {

    const password = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    
  }

/*   onSubmit() {
    if (!this.signupForm.invalid) {
      // do what you wnat with your data
      console.log(this.signupForm.value);
    }
  } */
  public doRegister():any {
    if(this.registrationDataGroup.valid){
      console.log(this.registrationDataGroup.valid)
      this.dataProvider.startSession(this.registrationDataGroup.value)
      // send data to backend
    }else{
      // show error
    }
  }
  public onKeypress(event: any):void {
    console.log(event)
  }

  public openDialog() {
    const dialogRef = this.dialog.open(ScrollableDialogOverviewComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}