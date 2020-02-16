import { HttpParams } from '@angular/common/http';
// interface used for .roules.ts file to return verification data state
export interface ResponseObject {
    message?: string;
    errorStatus: boolean;
}
export interface HttpActionExtras {
    body?: any;
    headers?: any;
    search?: any;
}
export interface HttpActionConfig {
    url: string;
    method: string;
    body: any;
    headers: any;
    search: HttpParams;
}
// Interface for Request Response
export interface ResponseWrapper {
    status: number;
    responseText: string;
    responseBytes: any;
    responseJSON: any;
    options: any;
    isError?: boolean;
}
export interface HttpActionExtras {
    body?: any;
    headers?: any;
    search?: any;
}
// Interfaces for rest api methods
export interface HttpMethods {
    GET: string;
    POST: string;
    PUT: string;
    PATCH: string;
    DELETE: string;
    OPTIONS: string;
    HEAD: string;
}
// Interfaces for header types
export interface HttpHeaderTypes {
    ANONYMOUS: string;
    LOGIN: string;
    AUTHORIZED: string;
    CUSTOM: string;
    REGISTRATION: string;
}
