import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-runiones-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './runiones-principal.component.html',
  styleUrls: ['./runiones-principal.component.css'], // Corregido: 'styleUrls' es plural
})
export class RunionesPrincipalComponent implements OnInit {
  reuniones: { mentor: string; dia: string; hora: string; aula: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Leer reuniones desde localStorage al iniciar el componente
    const storedReuniones = localStorage.getItem('reuniones');
    if (storedReuniones) {
      this.reuniones = JSON.parse(storedReuniones);
    }
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
