import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EncuestaService } from '../services/encuesta.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admini-mentores',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admini-mentores.component.html',
  styleUrls: ['./admini-mentores.component.css']
})
export class AdminiMentoresComponent {
  encuestas: any[] = [];
  editingEncuesta: any = null;
  newNotifications = 0;
  isDropdownOpen = false;
  
  constructor(private router: Router, private encuestaService: EncuestaService) { }

  ngOnInit() {
    const storedEncuestas = this.encuestaService.getEncuestas();
    if (storedEncuestas && storedEncuestas.length > 0) {
      this.encuestas = storedEncuestas;
    }
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
      this.encuestaService.updateEncuesta(this.editingEncuesta.id, this.editingEncuesta);
      this.encuestas = [...this.encuestaService.getEncuestas()]; // Recarga la lista completa
    }
    this.closeEditModal(); // Cierra el modal después de guardar
  }
  onSubmit(formValues: any) {
    this.encuestaService.addEncuesta(formValues); // Añade la nueva encuesta al servicio
    this.encuestas = [...this.encuestaService.getEncuestas()]; // Actualiza la lista de encuestas
  }
  // Método para eliminar una encuesta
  deleteEncuesta(index: number) {
    const encuesta = this.encuestas[index];
    if (encuesta && encuesta.id != null) {
      this.encuestaService.deleteEncuesta(encuesta.id); // Llama al método del servicio con el ID
      this.encuestas = [...this.encuestaService.getEncuestas()]; // Actualiza la lista de encuestas
    }
  }

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
