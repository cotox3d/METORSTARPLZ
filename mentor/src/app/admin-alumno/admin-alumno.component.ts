import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EncuestaalumnoService } from '../services/encuestaalumno.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-alumno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-alumno.component.html',
  styleUrl: './admin-alumno.component.css'
})
export class AdminAlumnoComponent {
  encuestas: any[] = [];
  editingEncuesta: any = null;
  newNotifications = 0;
  isDropdownOpen = false;

  constructor(private router: Router, private EncuestaalumnoService: EncuestaalumnoService) { }

  ngOnInit() {
    this.encuestas = this.EncuestaalumnoService.getEncuestas();
  }

  // Método para abrir el modal de edición
  openEditModal(encuesta: any) {
    this.editingEncuesta = { ...encuesta }; // Clona la encuesta para evitar ediciones en tiempo real
  }

  // Método para cerrar el modal de edición
  closeEditModal() {
    this.editingEncuesta = null;
  }

  // Método para guardar los cambios de edición
  saveEdit() {
    if (this.editingEncuesta && this.editingEncuesta.id != null) {
      // Llama al servicio para actualizar usando el ID de la encuesta
      this.EncuestaalumnoService.updateEncuesta(this.editingEncuesta.id, this.editingEncuesta);
      this.encuestas = [...this.EncuestaalumnoService.getEncuestas()]; // Recarga la lista completa
    }
    this.closeEditModal(); // Cierra el modal después de guardar
  }

  // Método para eliminar una encuesta
  deleteEncuesta(index: number) {
    this.encuestas.splice(index, 1);
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  goToadminmentor() {
    this.router.navigate(['/adminmentor']);
  }
  adminalumno() {
    this.router.navigate(['/adminalumno'])
  }
}
