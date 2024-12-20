import { Routes } from '@angular/router';  // 'Routes' es solo un tipo, no un valor
import { LoginComponent } from './login/login.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { PrincipalComponent } from './principal/principal.component';
import { MentoresComponent } from './mentores/mentores.component';
import { EncuestamenotrComponent } from './encuestamenotr/encuestamenotr.component';
import { AdminiMentoresComponent } from './admini-mentores/admini-mentores.component';
import { InformativoComponent } from './informativo/informativo.component';
import { AdminAlumnoComponent } from './admin-alumno/admin-alumno.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AdminReunionesComponent } from './admin-reuniones/admin-reuniones.component';
import { RunionesPrincipalComponent } from './runiones-principal/runiones-principal.component';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },


  { path: 'info', component: InformativoComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'mentores', component: MentoresComponent },
  { path: 'encuestamentor', component: EncuestamenotrComponent },
  { path: 'alumno-pri', component: AlumnoComponent },
  { path: 'reuprincipal', component: RunionesPrincipalComponent },




  { path: 'administrador', component: AdministradorComponent },
  { path: 'adminmentor', component: AdminiMentoresComponent },
  { path: 'adminalumno', component: AdminAlumnoComponent },
  { path: 'adminreu', component: AdminReunionesComponent }

];
