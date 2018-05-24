import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { map, take, filter, tap} from 'rxjs/operators';
import { IUser } from '../structures/users';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private afAuth: AngularFireAuth, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.afAuth.authState.pipe(
            take(1),
            map(( user: firebase.User) => {
                return !!user;
              }),
              tap((authenticated: boolean) => {
                if (!authenticated) {
                    this.router.navigate(['/login']);
                }
              })
        );
    }
}
