import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { url_createUser } from 'app/configurations/urls';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient
    ) { }

    public createUser(username: string, password: string) {
        const data = { 'username': username, 'password': password };
        const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
        return this.http.post(url_createUser, data, config);
    }
}