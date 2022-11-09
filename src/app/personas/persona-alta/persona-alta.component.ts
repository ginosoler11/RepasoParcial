import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ciudad } from 'src/app/models/ciudad';

import { Pais } from 'src/app/models/pais';
import { Persona } from 'src/app/models/persona';
import { CiudadService } from 'src/app/services/ciudad.service';

import { PaisService } from 'src/app/services/pais.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-alta',
  templateUrl: './persona-alta.component.html',
  styleUrls: ['./persona-alta.component.css'],
})
export class PersonaAltaComponent implements OnInit {
  formulario: FormGroup;
  persona: Persona;
  paises: Pais[];
  ciudades: Ciudad[];

  private subscription = new Subscription();

  constructor(
    private personaService: PersonaService,
    private paisService: PaisService,
    private ciudadService: CiudadService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.persona = new Persona();
    this.cargarCboPais();
    this.formulario = this.formBuilder.group({
      nombre: [,Validators.required],
      apellido: [,Validators.required],
      edad: [,Validators.required],
      paisId: [,Validators.required],
      ciudadId: [],
    })

    this.formulario.controls["paisId"].valueChanges.subscribe(x => {
      this.subscription.add(
        this.ciudadService.obtenerCiudadesPorPais(x).subscribe({
          next: (res: Ciudad[]) => {
            this.ciudades = res;
          },
          error: (e) => {
            console.error(e);
          }
        })
      );
   })
  }
  cargarCboPais(): void {
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
        this.personaService.agregar(this.formulario.value as Persona).subscribe({
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

  get controlNombre(): FormControl {
    return this.formulario.controls['nombre'] as FormControl;
  }
  get controlApellido(): FormControl {
    return this.formulario.controls['apellido'] as FormControl;
  }
  get controlEdad(): FormControl {
    return this.formulario.controls['edad'] as FormControl;
  }
  get controlPais(): FormControl {
    return this.formulario.controls['paisId'] as FormControl;
  }
  get controlCiudad(): FormControl {
    return this.formulario.controls['ciudadId'] as FormControl;
  }


}
