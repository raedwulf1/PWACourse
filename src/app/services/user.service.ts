import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

import { IUser } from '../structures/users';
/**
 * @description
 * @class
 */
@Injectable()
export class UserService {

  private user: AngularFirestoreCollection<IUser>;

  constructor(private afs: AngularFirestore) {
    this.user = afs.collection<IUser>('users');
  }


  add(user: IUser): Promise<void> {
    return this.user.doc(user.uid).set(user).catch(console.log);
  }

}
