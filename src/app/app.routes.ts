import { Routes } from '@angular/router';
import { PreguntaDosComponent } from './pregunta-dos/pregunta-dos.component';
import { PreguntaTresComponent } from './pregunta-tres/pregunta-tres.component';
import { PreguntaCuatroComponent } from './pregunta-cuatro/pregunta-cuatro.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

    {path: "dashboard", component: DashboardComponent},
    {path: "login", component: LoginComponent},
    {path: "dashboard/preguntados", component: PreguntaDosComponent},
    {path: "dashboard/preguntatres", component: PreguntaTresComponent},
    {path: "dashboard/preguntacuatro", component: PreguntaCuatroComponent}

];
