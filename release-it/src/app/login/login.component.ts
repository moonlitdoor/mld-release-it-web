import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    provider: auth.GithubAuthProvider = new auth.GithubAuthProvider().addScope("repo,read:user,read:org") as auth.GithubAuthProvider;

    constructor(public afAuth: AngularFireAuth) {
    }

    login() {
        this.afAuth.auth.signInWithPopup(this.provider);
    }

    logout() {
        this.afAuth.auth.signOut();
    }
}