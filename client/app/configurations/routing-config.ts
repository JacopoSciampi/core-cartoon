import { Routes } from "@angular/router";

import { LoginComponent } from '../components/login/login.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

import { AuthGuard } from '../Services/auth.guard';

export const routeConfiguration: Routes = [
    { path: '', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent }
];