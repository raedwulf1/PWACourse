import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { IList } from '../structures/lists';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * @description
 * @class
 */
@Injectable()
export class ListsService {

  public uid: string;
  public listsCollection: AngularFirestoreCollection<IList>;
  public lists: Observable<IList[]>;

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
  ) {
    this.auth.getUser().subscribe(user => {
      this.uid = user.uid;

      if (this.uid) {
        this.SetCollection();
      }
    });
  }


  SetCollection() {
    this.listsCollection = this.afs.collection('users').doc(this.uid).collection<IList>('lists');

    this.lists = this.listsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(item => {
        const data = item.payload.doc.data() as IList;
        const id = item.payload.doc.id;
        return {...data, id};
      });
    }));
  }

  add(list: IList): Promise<any> {
    if (!this.listsCollection) {
      throw Error('Set a Collection before try to add a new document');
    }

    const createAt = firebase.firestore.FieldValue.serverTimestamp();
    list.createAt = createAt;
    return this.listsCollection.add(list);
  }

}
