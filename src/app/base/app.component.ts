import {Component} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { PushNotificationsService } from '../services/pushNotifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  public token = true;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private pushS: PushNotificationsService
  ) {

  }

  requestPushPermission(){
    this.pushS.requestPermission().then(console.log);
  }

  rejectPushPermissions(){}

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

}
