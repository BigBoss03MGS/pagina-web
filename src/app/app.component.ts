import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Componentes/Header/header.component';
import { FooterComponent } from './Componentes/Footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
