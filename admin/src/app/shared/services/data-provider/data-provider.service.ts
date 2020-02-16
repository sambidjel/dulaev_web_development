import { Injectable } from '@angular/core';
import { DataProviderAbsService } from './data-provider.abs.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, filter, catchError, } from 'rxjs/operators';
import { HttpActionConfig, ResponseWrapper } from  'core-library';

@Injectable()
export class DataProviderService implements DataProviderAbsService {
    constructor(
        private httpClient:HttpClient
    ) {
      console.log('DataProviderService loaded')
    }
    public startSession(dataArgument :any): Observable<any> {
        //new observable
       return new Observable<any>((observer: any) => {
           //execute request
           this.makeRequest(dataArgument)
               .subscribe(
                   (response: any) => {
                       observer.next(response)
                   },
                   (error: any) => observer.error(error)
               );
       });
   }
   /**
    * Helper method to create requests
    *
    * @param options The request options
    */
    private makeRequest ( dataArgument: any ): Observable<any> {
        const req = new HttpRequest(
            dataArgument.method, 
            dataArgument.url, 
            dataArgument.body,
        );
        return this.httpClient.request(req).pipe(
            catchError(err => {
                console.log('Handling error locally and rethrowing it...', err);
                return err;
            })
        )
    }
  }
  