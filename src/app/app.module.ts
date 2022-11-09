import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaAltaComponent } from './personas/persona-alta/persona-alta.component';
import { PersonaBajaComponent } from './personas/persona-baja/persona-baja.component';
import { PersonaListadoComponent } from './personas/persona-listado/persona-listado.component';
import { EsMayorPipe } from './pipes/es-mayor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonaAltaComponent,
    PersonaBajaComponent,
    PersonaListadoComponent,
    EsMayorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
