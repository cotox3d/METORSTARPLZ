import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-reuniones',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-reuniones.component.html',
  styleUrls: ['./admin-reuniones.component.css']
})
export class AdminReunionesComponent {
  constructor(private router: Router) {}

  isDropdownOpen = false;

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  goToadminmentor() {
    this.router.navigate(['/adminmentor']);
  }

  alumnioregistro() {
    this.router.navigate(['/adminalumno']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  administrador() {
    this.router.navigate(['/administrador']);
  }

  verReuniones() {
    this.router.navigate(['/adminreu']);
  }

  reuniones: { mentor: string; dia: string; hora: string; aula: string }[] = [];
  newReunion = { mentor: '', dia: '', hora: '', aula: '' };
  isModalOpen = false;
  today: string = new Date().toISOString().split('T')[0];

  ngOnInit() {
    // Cargar reuniones desde localStorage al iniciar el componente
    const storedReuniones = localStorage.getItem('reuniones');
    if (storedReuniones) {
      this.reuniones = JSON.parse(storedReuniones);
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.newReunion = { mentor: '', dia: '', hora: '', aula: '' };
  }

  addReunion() {
    if (new Date(this.newReunion.dia) >= new Date(this.today)) {
      this.reuniones.push({ ...this.newReunion });

      // Guardar reuniones en localStorage
      localStorage.setItem('reuniones', JSON.stringify(this.reuniones));

      this.closeModal();
    } else {
      alert('No puedes seleccionar un día pasado.');
    }
  }
}
