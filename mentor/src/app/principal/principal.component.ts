import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
   constructor(private router: Router) { }  

  goToMentores() {this.router.navigate(['/mentores']);  }

  info() {
    this.router.navigate(['/info'])
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  scrollToSection(section: string) {
    let targetPosition: number;
    let offset = -65; // Offset predeterminado para las secciones

    if (section === '#somos-proya') {
      offset = -10;
    } else if (section === '#nuestros-programas') {
      offset = -60;
    } else if (section === '#caracteristicas') {
      offset = -10;
    }

    // Si es la parte superior de la página, establecemos la posición en 0
    if (section === 'top') {
      targetPosition = 0; // Posición exacta para el inicio de la página
    } else {
      // Caso general: obtenemos la posición del elemento objetivo
      const targetElement = document.querySelector(section);
      if (targetElement) {
        targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      } else {
        return; // Si no existe la sección, no hacer nada
      }
    }




    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1500; // Duración del desplazamiento (1.5 segundos)
    let startTime: number | null = null;

    function animationScroll(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    function easeInOutQuad(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animationScroll);
  }
}
