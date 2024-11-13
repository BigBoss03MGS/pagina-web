import { Routes } from '@angular/router';
import { HomeComponent } from './Paginas/Home/home.component';
import { LoginRegistroComponent } from './Paginas/login-registro/login-registro.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginRegistroComponent },
];
