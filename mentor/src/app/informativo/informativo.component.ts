import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-informativo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './informativo.component.html',
  styleUrl: './informativo.component.css'
})
export class InformativoComponent {
  facultyName: string | null = null;
  tooltipX: number = 0;
  tooltipY: number = 0;

  showFacultyName(name: string, event: MouseEvent): void {
    this.facultyName = name;
    this.tooltipX = event.clientX-200; // Posición X del tooltip
    this.tooltipY = event.clientY - 300; // Posición Y del tooltip (ajustada para que aparezca arriba)
  }

  hideFacultyName(): void {
    this.facultyName = null;
  }
  constructor(private router: Router){}
  goToMentores() {
    this.router.navigate(['/principal']);
  }

  private filePath = 'assets/files/Caracteristicas Py Mentor 2024-2.docx';

  downloadFile(): void {  // Asegúrate de que la función no reciba ningún argumento aquí
    const link = document.createElement('a');
    link.href = this.filePath;
    link.download = 'Caracteristicas Py Mentor 2024-2.docx';
    link.click();
  }
}