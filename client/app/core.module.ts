import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';

import { routeConfiguration } from './configurations/routing-config';

import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './Services/auth.guard';
import { AuthService } from './Services/auth.service';
import { ToastService } from './Services/toast.service';
import { StorageService } from './Services/storage.service';
import { TranslationService } from './Services/translate.service';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
            routeConfiguration
        ),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
            }
        }),
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
        })
    ],
    providers: [
        AuthGuard,
        AuthService,
        ToastService,
        StorageService,
        TranslationService
    ],
    bootstrap: [LoginComponent]
})
export class CoreModule { }

export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}