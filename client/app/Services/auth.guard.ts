import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { TranslationService } from './translate.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private translationService: TranslationService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this._checkConditions();
    }

    private _checkConditions(): boolean {
        let canActivate = false;

        return canActivate;
    }

}
