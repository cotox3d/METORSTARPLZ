import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncuestaAlumnoService {
  private encuestas: any[] = [];
  newEncuestaAdded = new EventEmitter<void>();

  constructor() { }

  // Método para agregar una encuesta con un ID único
  addEncuesta(encuesta: any) {
    const newEncuesta = { ...encuesta, id: this.generateUniqueId() }; // Añade un ID único
    this.encuestas.push(newEncuesta);
    this.newEncuestaAdded.emit();
  }

  // Método para obtener las encuestas
  getEncuestas() {
    return this.encuestas;
  }

  // Método para actualizar una encuesta específica basada en el ID
  updateEncuesta(id: number, updatedEncuesta: any) {
    const index = this.encuestas.findIndex(encuesta => encuesta.id === id);
    if (index !== -1) {
      this.encuestas[index] = { ...updatedEncuesta, id }; // Mantiene el mismo ID
    }
  }

  // Método para eliminar una encuesta específica basada en el ID
  deleteEncuesta(id: number) {
    const index = this.encuestas.findIndex(encuesta => encuesta.id === id);
    if (index !== -1) {
      this.encuestas.splice(index, 1);
    }
  }

  // Generador de ID único
  private generateUniqueId() {
    return Date.now() + Math.floor(Math.random() * 1000);
  }
}
