import { Injectable } from '@angular/core';
import { CommonTranslatorAbsService} from './common-translator-abs.service';
import { BASIC_TRANSLATIONS } from './basic-traslations';
@Injectable()
export class CommonTranslatorService implements CommonTranslatorAbsService {
    public basicTranslations: any;
    public languages: any;

    constructor() {
        this.basicTranslations = BASIC_TRANSLATIONS;
        this.languages = BASIC_TRANSLATIONS.common.languages;
    }
    /**
	 * Returns the locale configuration
	 * @returns Configuration object with the localization
	 */
    public getBasicTranslations (): Object {
        // Return a copy and not the original
        return this.clone(this.basicTranslations);
    }
    public clone ( source: Object ): Object {
        return JSON.parse(JSON.stringify(source));
    }
    public getAllLanguages (): Object {
        // Return a copy and not the original
        return this.clone(this.languages);
    }
}
