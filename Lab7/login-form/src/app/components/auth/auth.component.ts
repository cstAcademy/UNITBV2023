import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  showLoginModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showLogin(): void {
    this.showLoginModal = true;
  }
}
