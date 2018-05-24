import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { ITodo, TStatus } from '../structures/todos';
import * as firebase from 'firebase';
import { IList } from '../structures/lists';

/**
 * @description
 * @class
 */
@Injectable()
export class TodosService {

  private collection: AngularFirestoreCollection<ITodo>;
  private ref: Observable<DocumentChangeAction[]>;
  private listId: string;
  constructor(
    private afs: AngularFirestore,
  ) {

  }

  setCollection(listId: string) {
    this.listId = listId;
    this.collection = this.afs.collection('lists').doc(listId).collection('todos', (ref) => {
      return ref.where('status', '==', 0);
    });
    this.ref = this.collection.snapshotChanges().pipe(share());
  }

  getFromList(listId: string): Observable<ITodo[]> {
    if (!this.collection || this.listId === listId) {
      this.setCollection(listId);
    }
    return this.ref.pipe(map(actions => {
      return actions.map(item => {
        const data = item.payload.doc.data() as ITodo;
        const id = item.payload.doc.id;
        return {...data, id};
      });
    }));
  }

  add(listId: string, todo: ITodo): Promise<any> {
    if (!this.collection || this.listId === listId) {
      this.setCollection(listId);
    }
    const createAt = firebase.firestore.FieldValue.serverTimestamp();
    todo.createAt = createAt;
    return this.collection.add(todo);
  }


  update(listId: string, todo: ITodo ): Promise<void>{
    if (!this.collection || this.listId === listId) {
      this.setCollection(listId);
    }
    return this.collection.doc(todo.id).update({status: todo.status});
    // setTimeout(() =>
    // {return this.collection.doc(todo.id).update({status: todo.status})}, 300);
  }
}
