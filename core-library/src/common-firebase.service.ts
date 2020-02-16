import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,  AngularFireList } from 'angularfire2/database';
import { CommonFirebaseAbsService} from './common-firebase-abs.service';

@Injectable()
export class CommonFirebaseService implements CommonFirebaseAbsService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFireDb: AngularFireDatabase
  ) {
  }
  public signInWithPhoneNumber(phoneNumber: string, appVerifier: any): Promise<any> {
    return this.angularFireAuth.auth.signInWithPhoneNumber(phoneNumber, appVerifier);
  }

}
