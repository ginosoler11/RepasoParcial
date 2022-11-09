import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Pais } from 'src/app/models/pais';
import { Persona } from 'src/app/models/persona';

import { PaisService } from 'src/app/services/pais.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-alta',
  templateUrl: './persona-alta.component.html',
  styleUrls: ['./persona-alta.component.css'],
})
export class PersonaAltaComponent implements OnInit {
  @ViewChild('personaForm') formulario: NgForm;

  persona: Persona;
  paises: Pais[];

  private subscription = new Subscription();

  constructor(
    private personaService: PersonaService,
    private paisService: PaisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.persona = new Persona();
    this.subscription.add(
      this.paisService.obtenerListado().subscribe({
        next: (listado: Pais[]) => {
          this.paises = listado;
        },
        error: () => {
          alert('error al obtener paises');
        },
      })
    );
  }

  guardar() {
    if (this.formulario.valid) {
      this.subscription.add(
        this.personaService.agregar(this.persona).subscribe({
          next: () => {
            this.irAListado();
          },
          error: () => {
            alert('error al guardar');
          },
        })
      );
    }
  }

  cancelar() {
    this.irAListado();
  }

  private irAListado() {
    this.router.navigate(['']);
  }
}
