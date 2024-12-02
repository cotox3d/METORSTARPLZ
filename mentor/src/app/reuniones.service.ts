import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReunionesService {
  private reuniones: { mentor: string; dia: string; hora: string; aula: string }[] = [];

  // Método para obtener reuniones
  getReuniones() {
    return this.reuniones;
  }

  // Método para agregar una nueva reunión
  agregarReunion(reunion: { mentor: string; dia: string; hora: string; aula: string }) {
    this.reuniones.push(reunion);
  }
}
