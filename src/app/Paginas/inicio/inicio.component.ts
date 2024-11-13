import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  estadoMembresia = 'Activo';
  fechaVencimiento = '20/12/24';
  fraseDelDia = 'El único mal entrenamiento es el que no se hace.';
  clasesReservadas = [{ nombre: 'Yoga' }];
}
