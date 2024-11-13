import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/Paginas/Home/home.component';
import { LoginRegistroComponent } from './app/Paginas/login-registro/login-registro.component';
import { EntrenadoresComponent } from './app/Paginas/entrenadores/entrenadores.component';
import { InicioComponent } from './app/Paginas/inicio/inicio.component';
import { MisClasesComponent } from './app/Paginas/mis-clases/mis-clases.component';
import { MiPerfilComponent } from './app/Paginas/mi-perfil/mi-perfil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginRegistroComponent },
  { path: 'entrenadores', component: EntrenadoresComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'mis-clases', component: MisClasesComponent },
  { path: 'mi-perfil', component: MiPerfilComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ]
});

