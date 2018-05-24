import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

import { AppComponent } from './base/app.component';
import { HomeComponent } from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { environment } from '../environments/environment';
import { routes } from './routes';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from './guards/auth.guard.service';
import { UserService } from './services/user.service';
import { ListCreatorComponent } from './list/create/list.creator.component';
import { ListsService } from './services/lists.service';
import { ListComponent } from './list/list.component';
import { TodoscreatorComponent } from './todos/creator/todos.creator.component';
import { TodosService } from './services/todos.service';
import { TodoCardComponent } from './todos/card/todo.card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListCreatorComponent,
    ListComponent,
    TodoscreatorComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(routes),
    TransferHttpCacheModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    ListsService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
