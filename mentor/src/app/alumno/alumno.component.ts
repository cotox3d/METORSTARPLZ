import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EncuestaalumnoService } from '../services/encuestaalumno.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  constructor(private router: Router, private encuestaService: EncuestaalumnoService) { }

  // Al enviar el formulario
  onSubmit(formValues: any) {
    // Guardar los datos en el servicio
    this.encuestaService.addEncuesta(formValues);

    // Redirigir a Mentores
    this.router.navigate(['/mentores']);
  }
  goToMentores() {
    this.router.navigate(['/principal']);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
