import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RegistrateOK } from 'app/models/auth.dto';

import { url_createUser } from 'app/configurations/urls';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient
    ) { }

    public createUser(username: string, password: string): Observable<RegistrateOK> {
        const data = { 'username': username, 'password': password };
        const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

        return this.http.post<RegistrateOK>(url_createUser, data, config);
    }
}