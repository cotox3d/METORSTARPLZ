import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { EncuestaService } from '../services/encuesta.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent  {
  newNotifications = 0;
  isDropdownOpen = false;
  totalReuniones: number = 10; // Valor de ejemplo, puedes actualizar con datos reales
  totalMentores: number = 15;
  totalAlumnos: number = 100;
  totalProfesores: number = 8;

  constructor(private router: Router, private encuestaService: EncuestaService) { }
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
    this.router.navigate(['/administrador'])
  }
  reuniones() {
    this.router.navigate(['/adminreu'])
  }
  toggleDropdown(event: Event) {
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen; 
  }
  ngOnInit(): void {
    this.loadStatistics();
  }
  loadStatistics() {
    // Ejemplo de datos, reemplaza esto con datos reales de un servicio
    this.totalReuniones = 10;
    this.totalMentores = 15;
    this.totalAlumnos = 100;
    this.totalProfesores = 8;
  }
}