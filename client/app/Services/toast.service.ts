import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
@Injectable()
export class ToastService {
    constructor(
        private toastr: ToastrService
    ) { }

    public success(phrase: string): void {
        this.toastr.success(phrase);
    }

    public error(phrase: string): void {
        this.toastr.error(phrase);
    }

    public warning(phrase: string): void {
        this.toastr.warning(phrase);
    }

    public info(phrase: string): void {
        this.toastr.info(phrase);
    }
}