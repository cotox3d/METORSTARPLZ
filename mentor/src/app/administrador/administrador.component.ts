import { Component } from '@angular/core';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent  {

  stats = {
    admin: 7,
    teacher: 10,
    student: 70,
    representative: 70
  };

  history = [
    { id: 1, role: 'Admin', name: 'Name', start: '7:00 AM', end: '7:17 AM', date: '07/07/2016' },
    { id: 2, role: 'Teacher', name: 'Name', start: '7:00 AM', end: '7:17 AM', date: '07/07/2016' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Aquí puedes agregar lógica para cargar estadísticas o historial desde un API, etc.
  }

}