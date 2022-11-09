import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private API_URL: string = 'https://6362dc9d37f2167d6f6e7c27.mockapi.io/pais/';

  constructor(private http: HttpClient) {}

  obtenerCiudadesPorPais(idPais: number): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.API_URL + idPais + '/ciudad');
  }
}
