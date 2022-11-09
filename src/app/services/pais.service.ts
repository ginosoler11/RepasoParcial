import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private API_URL: string = 'https://6362dc9d37f2167d6f6e7c27.mockapi.io/pais/';

  constructor(private http: HttpClient) {}

  obtenerListado(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.API_URL);
  }
}
