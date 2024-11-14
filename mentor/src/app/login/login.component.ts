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
  isLoading: boolean = false; // Indicador de carga

// Definimos un conjunto de arreglos
users = [
  { username: '202110480', password: '123', role: 'mentoreado' },
  { username: '10480', password: '123', role: 'mentor' },
  { username: '202110499', password: '123', role: 'mentoreado' },
  { username: '10499', password: '123', role: 'mentor' },
];

  constructor(private router: Router) {}

  onLogin() {
    // Limpiar mensajes previos y comenzar a cargar
    this.errorMessage = null;
    this.isLoading = true;

    setTimeout(() => {
    const foundUser = this.users.find(user => user.username === this.username && user.password === this.password);

    if (foundUser) {
      this.errorMessage = null;
      this.isLoading = false;

      // Redirigir según el rol del usuario
      if (foundUser.role === 'mentor') {
        this.router.navigate(['/administrador']);
      } else if (foundUser.role === 'mentoreado') {
        this.router.navigate(['/principal']);
      }
    } else {
      // En caso de credenciales incorrectas
      this.isLoading = false;
      this.errorMessage = 'Usuario o contraseña incorrectos';
       }   
    }, 1500);
  }
}