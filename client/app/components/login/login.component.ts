import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { GenericError } from 'app/models/server.dto';
import { ToastService } from '../../Services/toast.service';
import { StorageService } from '../../Services/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public isLoginScreen = true;

    constructor(
        private authService: AuthService,
        private toastService: ToastService,
        private storageService: StorageService,
    ) { }

    ngOnInit(): void {
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
