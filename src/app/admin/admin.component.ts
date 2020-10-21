import {Component} from '@angular/core';
import {AuthService} from '../model/AuthService';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'admin.component.html'
})
export class AdminComponent {
  constructor(private auth: AuthService,
              private router: Router) {
  }

  logout() {
    this.auth.clear();
    this.router.navigateByUrl('/');
  }
}
