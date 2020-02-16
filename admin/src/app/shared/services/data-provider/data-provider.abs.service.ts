import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpActionConfig,ResponseWrapper } from 'core-library';
@Injectable()
export abstract class DataProviderAbsService {
    public abstract startSession(dataArgument: HttpActionConfig): Observable<ResponseWrapper>;
}