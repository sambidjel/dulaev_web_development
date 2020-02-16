import { Injectable } from '@angular/core';
import { CommonAuthAbsService } from './common-auth-abs.service';

@Injectable()
export class CommonAuthService implements CommonAuthAbsService {

  constructor() {
    console.log(' Loaded CommonAuthService ');
  }
  public initialiser(): void {
    console.log('initialiser');
  }
}
