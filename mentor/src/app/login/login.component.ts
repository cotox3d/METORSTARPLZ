import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router) {}

 onLogin() {
   const validUsername = 'admin';
   const validPassword = '123';
   const validMemberUsername = 'ALUMNO';
   const validMemberPassword = '123';

    if (this.username === validUsername && this.password === validPassword) {
      this.errorMessage = null;
      alert('Login exitoso');
      this.router.navigate(['/admin']);
    }
    else if (this.username === validMemberUsername && this.password === validMemberPassword) {
      this.errorMessage = null;
      alert('Login exitoso');
      this.router.navigate(['/principal']);
    } else {
      alert('incorrecto');
    }
  }
}
