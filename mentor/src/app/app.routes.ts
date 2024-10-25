import { Routes } from '@angular/router';  // 'Routes' es solo un tipo, no un valor
import { LoginComponent } from './login/login.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { PrincipalComponent } from './principal/principal.component';
import { MentoresComponent } from './mentores/mentores.component';
import { EncuestamenotrComponent } from './encuestamenotr/encuestamenotr.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'mentores', component: MentoresComponent },
  { path: 'encuestamentor', component: EncuestamenotrComponent }
];
