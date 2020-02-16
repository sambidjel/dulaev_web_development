import { NgModule } from '@angular/core';
import { CommonTranslatorAbsService } from './common-translator-abs.service';
import { CommonTranslatorService } from './common-translator.service';
import { TranslatorPipe } from './common-translator.pipe';

export { TranslatorPipe } from './common-translator.pipe';
export { CommonTranslatorAbsService } from './common-translator-abs.service';
export { CommonTranslatorService } from './common-translator.service';

export const COMMON_TRANSLATION_SERVICES_PROVIDER: any[] = [
    { provide: CommonTranslatorAbsService, useClass: CommonTranslatorService}
];

@NgModule({
    providers: [
        COMMON_TRANSLATION_SERVICES_PROVIDER
    ],
    declarations: [
    ]
})
export class CommonPipesModule {}
