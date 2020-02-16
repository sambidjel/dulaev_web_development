import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';
import { InputOptions } from '../../../shared/interfaces';
@Component({ 
  selector: 'app-authorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  phonenumberInputOptions:InputOptions;
  passwordInputOptions:InputOptions;
  phonenumberControl:FormControl;
  passwordControl:FormControl;
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.phonenumberInputOptions = {
      label: 'Номер телефона',
      appearance: 'outline',
      placeholder: 'введите 10-и значный номер телефона',
      type: 'phone'
    }
    this.passwordInputOptions = {
      label: 'Пароль',
      appearance: 'outline',
      placeholder: 'введите ваш пароль',
      type: 'password'
    }
    this.phonenumberControl = new FormControl('',Validators.required);
    this.passwordControl = new FormControl('',Validators.required);
 
  }

  ngOnInit() {
    
    const password = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    this.signupForm = this.fb.group(
      {
        email: ["",[Validators.required,Validators.email]],
        password: password,
        agreed: [false,Validators.required]
      }
    );
  }

  public onSubmit():void {
    if (!this.signupForm.invalid) {
      // do what you wnat with your data
      console.log(this.signupForm.value);
    }
  }

  public onKeypress(event: any):void {
 console.log('event from main componente')
 console.log(event)
  }
}
