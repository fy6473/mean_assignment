import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app';  // ✅ import parent

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private http: HttpClient, private app: AppComponent) {}

  login() {
    this.http.post('http://localhost:5000/login', {
      email: this.email,
      password: this.password
    }).subscribe((res: any) => {

      if (res === "Login successful") {
        this.app.isLoggedIn = true;   // ✅ show welcome page
      } else {
        alert(res);
      }

    });
  }
}