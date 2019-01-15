import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in');
    }, err => {
      console.log('Error');
    });
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
}

