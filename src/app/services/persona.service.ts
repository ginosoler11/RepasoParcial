import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private API_URL: string =
    'https://6362dc9d37f2167d6f6e7c27.mockapi.io/persona/';

  constructor(private http: HttpClient) {}

  obtenerListado(): Observable<Persona[]> {
    const result = this.http.get<Persona[]>(this.API_URL);
    return result;
  }

  eliminar(persona: Persona): Observable<any> {
    return this.http.delete(this.API_URL + persona.id);
  }

  agregar(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.API_URL, persona);
  }

  modificar(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.API_URL + persona.id, persona);
  }
}
