import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard.service';
import { ListCreatorComponent } from './list/create/list.creator.component';
import { ListComponent } from './list/list.component';


export const routes = [
    { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'lists/:id', component: ListComponent},
    { path: 'new', component: ListCreatorComponent, canActivate: [AuthGuard]}
];
