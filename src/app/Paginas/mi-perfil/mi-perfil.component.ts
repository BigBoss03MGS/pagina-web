import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  usuario = {
    nombreUsuario: 'User123',
    nombreCompleto: 'Juan Rodríguez Esparza',
    correo: 'juan123@gmail.com',
    fechaNacimiento: '23/08/94',
    peso: '80kg',
    altura: '1.70m'
  };

  progresoFisico = {
    pesoCorporal: 'Peso Normal',
    grasaCorporal: '20%',
    masaMuscular: '30%'
  };
}
