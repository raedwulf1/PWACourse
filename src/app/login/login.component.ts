import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  login() {
    this.auth.login().then(() => this.router.navigate(['/']));
  }

  ngOnInit() {
    this.auth.getUser().subscribe(val => {console.log(val); } );
  }
}
