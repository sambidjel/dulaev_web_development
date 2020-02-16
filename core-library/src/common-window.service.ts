import { Injectable } from '@angular/core';

@Injectable()

export class CommonWindowService {

    constructor() {}
    windowRef() {
        return window;
    }
}
