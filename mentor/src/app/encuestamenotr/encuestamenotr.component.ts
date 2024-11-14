import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestaMentorService } from '../services/encuesta.service';
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar *ngFor
import { FormsModule } from '@angular/forms';  // Importar FormsModule

@Component({
  selector: 'app-encuestamenotr',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './encuestamenotr.component.html',
  styleUrl: './encuestamenotr.component.css'
})
export class EncuestamenotrComponent {
  constructor(private router: Router, private encuestaService: EncuestaMentorService) { }

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
