import { Routes } from '@angular/router';
import { PreguntaDosComponent } from './pregunta-dos/pregunta-dos.component';
import { PreguntaTresComponent } from './pregunta-tres/pregunta-tres.component';
import { PreguntaCuatroComponent } from './pregunta-cuatro/pregunta-cuatro.component';

export const routes: Routes = [


    {path: "preguntados", component: PreguntaDosComponent},
    {path: "preguntatres", component: PreguntaTresComponent},
    {path: "preguntacuatro", component: PreguntaCuatroComponent}

];
