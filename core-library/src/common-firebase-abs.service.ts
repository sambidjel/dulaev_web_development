export abstract class CommonFirebaseAbsService {
  public abstract signInWithPhoneNumber(phoneNumber: string, appVerifier: any): Promise<any>;
}
