import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public isLoginScreen = true;

    constructor(
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
    }

    public onLoginClick(username: string, passowrd: string): void {

    }

    public onRegistrateClick(username: string, password: string): void {
        this.authService.createUser(username, password)
            .subscribe(response => {
                console.table(response);
            }, err => {
                console.log(err);
            })
    }

    public toggleLoginScreen(): void {
        this.isLoginScreen = !this.isLoginScreen;
    }

}
