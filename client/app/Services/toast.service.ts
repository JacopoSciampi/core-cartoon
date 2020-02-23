import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { TranslationService } from './translate.service';
@Injectable()
export class ToastService {
    constructor(
        private toastr: ToastrService,
        private translationService: TranslationService
    ) { }

    public success(phrase: string): void {
        this.translationService.getTranslation(phrase)
            .subscribe(value => {
                this.toastr.success(value);
            }, () => {
                this.toastr.success(phrase);
            });
    }

    public error(phrase: string): void {
        this.translationService.getTranslation(phrase)
            .subscribe(value => {
                this.toastr.error(value);
            }, () => {
                this.toastr.error(phrase);
            });
    }

    public warning(phrase: string): void {
        this.translationService.getTranslation(phrase)
            .subscribe(value => {
                this.toastr.warning(value);
            }, () => {
                this.toastr.warning(phrase);
            });
    }

    public info(phrase: string): void {
        this.translationService.getTranslation(phrase)
            .subscribe(value => {
                this.toastr.info(value);
            }, () => {
                this.toastr.info(phrase);
            });
    }
}