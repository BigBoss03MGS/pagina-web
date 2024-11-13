import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-datos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent {
  usuario = {
    nombreUsuario: 'User123',
    nombreCompleto: 'Juan Rodríguez Esparza',
    correo: 'juan123@gmail.com',
    fechaNacimiento: '23/08/94',
    peso: '80kg',
    altura: '1.70m'
  };

  editMode = false;

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  confirmarDatos() {
    // Aquí puedes añadir lógica para guardar los datos actualizados
    this.toggleEditMode();
  }
}
