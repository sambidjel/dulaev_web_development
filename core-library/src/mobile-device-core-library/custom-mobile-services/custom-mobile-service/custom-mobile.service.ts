import { Injectable } from '@angular/core';
import { CustomMobileAbsService } from './custom-mobile-abs.service';
@Injectable()
export class CustomMobileService implements CustomMobileAbsService  {
  constructor(
  ) {
    console.log('CUSTOM MOBILE SERVICE looooooo')
  }
  public testFunction():void{
      console.log('testFunction works')
  }
}
