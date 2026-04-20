import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html'
})
export class RegisterComponent {

  email = '';
  password = '';

  constructor(private http: HttpClient) {}

  register() {
    this.http.post('http://localhost:5000/register', {
      email: this.email,
      password: this.password
    }).subscribe((res: any) => {
      alert(res);
    });
  }
}