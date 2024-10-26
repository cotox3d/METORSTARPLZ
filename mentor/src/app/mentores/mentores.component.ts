import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestaService } from '../services/encuesta.service';
import { CommonModule } from '@angular/common';
interface Mentor {
  name: string;
  email: string;
  area: string;
}
@Component({
  selector: 'app-mentores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mentores.component.html',
  styleUrl: './mentores.component.css'
})
export class MentoresComponent {
  constructor(private router: Router, private encuestaService: EncuestaService) { }

  encuestas: any[] = [];

  ngOnInit() {
    // Obtener los datos de las encuestas del servicio
    this.encuestas = this.encuestaService.getEncuestas();
  }
  goToMentores() {
    this.router.navigate(['/principal']);
  }
  goToEncuestamentor() {
    this.router.navigate(['/encuestamentor']);
  }
  goToadminmentor() {
    this.router.navigate(['/adminmentor']);
  }
}
