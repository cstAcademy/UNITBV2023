import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'login-form';

  showLoginModal: boolean = false;

  showLogin(): void {
    this.showLoginModal = true;
  }
}
