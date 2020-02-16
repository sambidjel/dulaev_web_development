import { Pipe, PipeTransform } from '@angular/core';
import { CommonTranslatorAbsService } from './common-translator-abs.service';
/**
 * Returns the localized string according to the language set in the application.
 * @param	lang The language to use
 * @param	{Object} data The data to use for templating
 * @example Usage:
 * ```html
 * <p>{{ 'key.to.translation' | localize:'en':{data} }}</p>
 * <!-- Formats to: 'Translation in english' -->
 * ```
 */
@Pipe({name: 'translator'})

export class TranslatorPipe implements PipeTransform {
    constructor(
      private commTranslator: CommonTranslatorAbsService
    ) {}
    public transform(path: string, lang: string, data?: Object): string {
        let result: any = this.commTranslator.getBasicTranslations(),
        parts: string[] = path.split('.');
        // Parameter checking
    if (!result) {
        console.error('LocalizePipe::: No configuration set for translations');
        return 'err';
      }
      if (!lang) {
        console.error('LocalizePipe::: No language present on the Pipe call');
        return 'err';
      }
      // Dig into the stucture
      while (parts.length) {
        result = result[parts.shift()];
        if (!result) {
          console.error('LocalizePipe::: Path not found', path);
          return path;
        }
      }

      if (typeof result === 'object' && result[lang]) {
        // return text translated with replaced template expression
        return this.replaceTemplateExpression(result[lang], data);
      }
      console.error('LocalizePipe::: translation corrupted at path', path, lang, result);
      return 'err';
    }
    private replaceTemplateExpression(translatedLocale: string, replaceStructure: Object): string {
        // loop the data object
        for (let key in replaceStructure) {
            if (replaceStructure.hasOwnProperty(key)) {
            // replace the template with the value passed
            translatedLocale = translatedLocale.split('{{' + key + '}}').join(replaceStructure[key]);
            }
        }
        // return translation
        return translatedLocale;
    }
}
