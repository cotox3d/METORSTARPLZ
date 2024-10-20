import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { AdministradorComponent } from './administrador/administrador.component';
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'admin', component: AdministradorComponent },

];
