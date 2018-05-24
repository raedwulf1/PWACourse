import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';


/**
 * @description
 * @class
 */
@Injectable()
export class PushNotificationsService {
  public messaging: firebase.messaging();

requestPermission(): Promise<void>{
    return this.messaging.requestPermission().then(() => {
      return this.messaging.getToken();
    });
}

  constructor() {
    
  }

}
