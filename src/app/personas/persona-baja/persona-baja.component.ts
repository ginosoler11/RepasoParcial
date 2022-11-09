import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-baja',
  templateUrl: './persona-baja.component.html',
  styleUrls: ['./persona-baja.component.css']
})
export class PersonaBajaComponent implements OnDestroy {
  @Input() persona: Persona;
  @Output() onEliminado = new EventEmitter();

  private subscription = new Subscription();

  constructor(private servicioPersona: PersonaService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  eliminarPersona() {
    this.subscription.add(
      this.servicioPersona.eliminar(this.persona).subscribe({
        next: () => {
          this.onEliminado.emit();
        },
        error: () => {
          alert('error al eliminar');
        }
      })
    )
  }
}
