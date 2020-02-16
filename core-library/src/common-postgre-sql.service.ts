import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, filter, catchError, } from 'rxjs/operators';
import { 
    CommonPostgreSqlAbsService,
    HttpActionConfig,
    ResponseWrapper
 } from './index';

@Injectable()
export class CommonPostgreSqlService implements CommonPostgreSqlAbsService {
    constructor(
     
    ) {}
    
    public startSession(dataArgument :any):void {
         //new observable
		console.log(dataArgument)
    }
    
}
