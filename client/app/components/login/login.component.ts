import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { GenericError } from 'app/models/server.dto';
import { ToastService } from '../../Services/toast.service';
import { StorageService } from '../../Services/storage.service';
import { FlagInterface } from 'app/models/login.dto';
import { TranslationService } from 'app/Services/translate.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public isLoginScreen = true;
    public isChangingLanguage = false;

    public flagList: FlagInterface[] = [
        {
            icon: 'http://jacoposciampi.com/assets/svg/en.svg',
            value: 'en',
            text: 'English'
        },
        {
            icon: 'http://jacoposciampi.com/assets/svg/it.svg',
            value: 'it',
            text: 'Italian'
        }
    ];

    public currentLanguageIcon = `${this.flagList.find(el => el.value === this.storageService.getValue('locale')).icon}`;
    public isLanguageModalOpened = false;

    constructor(
        private authService: AuthService,
        private toastService: ToastService,
        private storageService: StorageService,
        private translationService: TranslationService,
    ) { }

    ngOnInit(): void {
    }

    public changeLanguage(newLanguage: string): void {
        this.isChangingLanguage = true;

        this.translationService.changeLanguage(newLanguage)
            .finally(() => this.isChangingLanguage = false)
            .then(() => {
                this.currentLanguageIcon = `${this.flagList.find(el => el.value === newLanguage).icon}`;
                this.isLanguageModalOpened = false;
                this.toastService.success('Language changed correctly');
            }).catch(() => {
                this.isLanguageModalOpened = false;
                this.toastService.error('There was an error changing the language');
            });
    }

    public toggleLanguageChange(): void {
        this.isLanguageModalOpened = !this.isLanguageModalOpened;
    }

    public onLoginClick(username: string, passowrd: string): void {

    }

    public onRegistrateClick(username: string, password: string): void {
        this.authService.createUser(username, password)
            .subscribe(response => {
                this.storageService.setValue('token', response.token);
                this.toastService.success("Account created!");
            }, (err: GenericError) => {
                this.toastService.error(err.error.error);
            })
    }

    public toggleLoginScreen(): void {
        this.isLoginScreen = !this.isLoginScreen;
    }

}
