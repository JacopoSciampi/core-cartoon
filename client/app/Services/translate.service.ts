import { Injectable } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';

import { StorageService } from './storage.service';

@Injectable()
export class TranslationService {
    private supportedLanguages: string[] = ["it", "en"];
    constructor(
        public translate: TranslateService,
        private storageService: StorageService,
    ) {
        translate.addLangs(this.supportedLanguages);
        this._setDefaultLanguage();
    }

    private _setDefaultLanguage(): void {
        const locale = this.storageService.getValue('locale');

        if (!locale || !this.supportedLanguages.find(el => el === locale)) {
            this.translate.setDefaultLang('en');
            this.storageService.setValue('locale', 'en');
        } else {
            this.translate.setDefaultLang(locale);
        }
    }
}