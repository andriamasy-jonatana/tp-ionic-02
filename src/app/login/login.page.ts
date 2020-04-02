import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import User from '../services/models/User';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    id = '';
    nom = '';
    mdp = '';

    user: User;
    loading = false;
    error: string;

    constructor(private loginService: LoginService) { }

    ngOnInit() {
    }

    login() {
        this.loading = true;
        this.error = null;

        this.loginService.login(this.id, this.nom, this.mdp)
            .subscribe(user => this.user = user,
                error => {
                    this.loading = false;
                    this.error = error;
                }, () => {
                    this.loading = false;
                });
    }

}
