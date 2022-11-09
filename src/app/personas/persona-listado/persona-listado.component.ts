import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pais } from 'src/app/models/pais';
import { Persona } from 'src/app/models/persona';
import { PaisService } from 'src/app/services/pais.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-listado',
  templateUrl: './persona-listado.component.html',
  styleUrls: ['./persona-listado.component.css'],
})
export class PersonaListadoComponent implements OnInit, OnDestroy {
  listado: Persona[];

  private subscription = new Subscription();

  constructor(
    private servicioPersona: PersonaService,
    private servicioPais: PaisService
  ) {}

  ngOnInit(): void {
    this.actualizarListado();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  actualizarListado() {
    this.subscription.add(
      this.servicioPais.obtenerListado().subscribe({
        next: (paises: Pais[]) => {
          this.servicioPersona.obtenerListado().subscribe({
            next: (listado: Persona[]) => {
              listado.forEach((persona) => {
                const indice = paises.findIndex((x) => x.id === persona.paisId);
                persona.pais = paises[indice];
              });

              this.listado = listado;
            },
            error: () => {
              alert('error');
            },
          });
        },
        error: () => {
          alert('error');
        },
      })
    );
  }
}
