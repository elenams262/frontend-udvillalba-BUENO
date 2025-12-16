import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // <--- IMPORTANTE: Usamos AuthService, no ApiService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  esModoLogin: boolean = true;

  credenciales = {
    correo: '',
    password: '',
  };

  mensajeError: string = '';

  // Inyectamos AuthService en lugar de ApiService para el login
  constructor(private authService: AuthService, private router: Router) {}

  cambiarModo() {
    this.esModoLogin = !this.esModoLogin;
  }

  // Este método se llama desde el HTML (ngSubmit)
  onEnviar() {
    // 1. Preparamos los datos
    // El backend espera "contraseña" (con ñ)
    const datosParaEnviar = {
      correo: this.credenciales.correo,
      contraseña: this.credenciales.password,
    };

    console.log('Intentando login con:', datosParaEnviar.correo);

    // 2. USAMOS AUTHSERVICE (Aquí está la clave)
    // Él se encarga de recibir la respuesta y guardar token + usuario + rol en localStorage
    this.authService.login(datosParaEnviar).subscribe({
      next: (res) => {
        console.log('Login exitoso. Redirigiendo...');
        // No hace falta guardar el token aquí, auth.service ya lo hizo
        this.router.navigate(['/inicio']); // O '/home' según tus rutas
      },
      error: (err) => {
        console.error('Error en login:', err);
        this.mensajeError = 'Correo o contraseña incorrectos';
      },
    });
  }
}
