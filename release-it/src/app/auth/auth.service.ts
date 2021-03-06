import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from "@angular/fire/auth";

export class User {
    accessToken: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private accessTokenGithub: string;
    private userId: string;

    constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.db.collection('users').doc(user.uid).get().subscribe(value => {
                    this.accessTokenGithub = value.get("accessTokenGithub");
                });
                this.userId = user.uid;
            }
        })
    }

    setGitHubAccessToken(uid: string, accessToken: string) {
        this.db.collection('users').doc(uid).set({accessTokenGithub: accessToken});
    }
}
