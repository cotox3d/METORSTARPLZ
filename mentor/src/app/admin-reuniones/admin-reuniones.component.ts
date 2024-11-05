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
  styleUrl: './admin-reuniones.component.css'
})
export class AdminReunionesComponent {
  constructor(private router: Router) { }
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
    this.router.navigate(['/administrador'])
  }
  reuniones() {
    this.router.navigate(['/adminreu'])
  }
 
}
