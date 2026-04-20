import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { WelcomeComponent } from './welcome/welcome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent
  ],
  templateUrl: './app.html'
})
export class AppComponent {
  showLogin = true;
  isLoggedIn = false;   // ✅ NEW
}