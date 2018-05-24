import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

import { IUser } from '../structures/users';
import { map, take, filter } from 'rxjs/operators';
import { UserService } from './user.service';
/**
 * @description
 * @class
 */
@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private userS: UserService
    ) {

  }

  getUser(): Observable<IUser> {
    console.log(this.afAuth.authState);
      return this.afAuth.authState.pipe(
        take(1),
        filter(user => !!user),
        map(( user: firebase.User) => {
            return user as IUser;
          })

      );
  }

  login(): Promise<void> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        return this.userS.add({uid: result.user.uid, email: result.user.email});
      }).catch(console.log);
  }
}
