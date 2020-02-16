import { Observable } from 'rxjs';
import { 
    HttpActionConfig,
    ResponseWrapper
 } from './common.interfaces';
export abstract class CommonPostgreSqlAbsService {
    public abstract startSession(dataArgument: any): void;
}
