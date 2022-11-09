import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonaAltaComponent } from './personas/persona-alta/persona-alta.component';
import { PersonaListadoComponent } from './personas/persona-listado/persona-listado.component';

const routes: Routes = [
  { path: 'listado', component: PersonaListadoComponent },
  { path: 'nuevo', component: PersonaAltaComponent },
  { path: '', redirectTo: 'listado', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
