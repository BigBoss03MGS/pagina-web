import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Entrenador {
  nombre: string;
  categoria: string;
}

@Component({
  selector: 'app-entrenadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entrenadores.component.html',
  styleUrls: ['./entrenadores.component.css']
})
export class EntrenadoresComponent {
  categorias = [
    {
      nombre: 'Yoga',
      entrenadores: [{ nombre: 'Juana Ramos' }, { nombre: 'Carlos Torres' }]
    },
    {
      nombre: 'Zumba',
      entrenadores: [{ nombre: 'Laura Mendoza' }, { nombre: 'Pedro Martínez' }]
    },
    {
      nombre: 'Spinning',
      entrenadores: [{ nombre: 'María González' }, { nombre: 'Luis Pérez' }]
    },
    {
      nombre: 'Crossfit',
      entrenadores: [{ nombre: 'Andrea López' }, { nombre: 'Juan Hernández' }]
    }
  ];
}
