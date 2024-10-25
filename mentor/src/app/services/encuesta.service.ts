import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  private encuestas: any[] = []; // Aquí almacenaremos los datos de las encuestas

  constructor() { }

  // Método para agregar datos de la encuesta
  addEncuesta(encuesta: any) {
    this.encuestas.push(encuesta); // Agrega la encuesta al array
  }

  // Método para obtener los datos almacenados
  getEncuestas() {
    return this.encuestas; // Devuelve todas las encuestas almacenadas
  }
}
