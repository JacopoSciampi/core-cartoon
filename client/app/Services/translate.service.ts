import { Injectable } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';

import { StorageService } from './storage.service';
import { Observable } from 'rxjs';

@Injectable()
export class TranslationService {
    private supportedLanguages: string[] = ["it", "en"];
    constructor(
        private translate: TranslateService,
        private storageService: StorageService,
    ) {
        translate.addLangs(this.supportedLanguages);
        this._setDefaultLanguage();
    }

    public getTranslation(key: string): Observable<string> {
        return this.translate.get(key);
    }

    public changeLanguage(language: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.translate.use(language).toPromise()
                .then(() => {
                    resolve(true);
                }).catch(() => {
                    reject();
                })
        });
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