//Esto es para que el servicio se inyecte en cualquier parte de la app
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // La URL de tu servidor backend
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  // Método auxiliar para obtener el token guardado
  private getHeaders() {
    const token = localStorage.getItem('token'); // Recuperamos el token del navegador
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }

  // --- AUTENTICACIÓN ---

  registro(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, usuario);
  }

  login(credenciales: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credenciales);
  }

  getPerfil(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/profile`, this.getHeaders());
  }

  // --- CLASIFICACIÓN ---

  getClasificacion(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clasificacion`);
  }
  // --- GESTIÓN CLASIFICACIÓN (Solo Admin) ---

  // Crear un nuevo equipo
  crearEquipo(equipo: any): Observable<any> {
    // Importante: pasamos this.getHeaders() para que el backend sepa que somos Admin
    return this.http.post(`${this.apiUrl}/clasificacion`, equipo, this.getHeaders());
  }

  // Actualizar datos de un equipo (puntos, goles, etc.)
  actualizarEquipo(id: string, equipo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/clasificacion/${id}`, equipo, this.getHeaders());
  }

  // Eliminar un equipo de la tabla
  eliminarEquipo(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clasificacion/${id}`, this.getHeaders());
  }
  // --- PARTIDOS ---

  getProximoPartido(): Observable<any> {
    return this.http.get(`${this.apiUrl}/jornada`);
  }
}
