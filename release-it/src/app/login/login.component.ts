import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    provider: auth.GithubAuthProvider;

    constructor(public afAuth: AngularFireAuth, private authService: AuthService) {
        this.provider = new auth.GithubAuthProvider();
        this.provider = this.provider.addScope("repo,read:user,read:org") as auth.GithubAuthProvider;
        this.provider = this.provider.setCustomParameters({'allow_signup': 'false'}) as auth.GithubAuthProvider;
    }

    ngOnInit() {
        this.afAuth.auth.getRedirectResult().then(
            onFulFilled => {
                if (onFulFilled.credential) {
                    this.authService.setGitHubAccessToken(onFulFilled.user.uid, onFulFilled.credential['accessToken']);
                }
            }
        )
    }

    login() {
        this.afAuth.auth.signInWithRedirect(this.provider);
    }

    logout() {
        this.afAuth.auth.signOut();
    }
}