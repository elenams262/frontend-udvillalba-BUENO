import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// 1. Importamos el componente de la ficha y la interfaz Player
import { PlayerCardComponent, Player } from '../player-card/player-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  // 2. AÑADIMOS EL COMPONENTE HIJO AQUÍ EN LOS IMPORTS
  imports: [CommonModule, PlayerCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  
  // 3. Definimos los datos de las jugadoras (Estos datos se pasan al HTML)
  jugadoras: Player[] = [
    {
      name: 'Ana García',      // Cambia esto por los nombres reales
      position: 'Delantera',
      number: 9,
      image: 'jugadora1.jpg',      // Nombre del archivo en la carpeta uploads
      video: 'video-jugadora1.mp4' // Nombre del archivo en la carpeta uploads
    },
    {
      name: 'Laura Ruiz',
      position: 'Centrocampista',
      number: 14,
      image: 'jugadora2.jpg',
      video: 'video-jugadora2.mp4'
    },
    {
      name: 'María López',
      position: 'Defensa',
      number: 4,
      image: 'jugadora3.jpg',
      video: 'video-jugadora3.mp4'
    },
  ];

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token'); // Borramos la llave
    this.router.navigate(['/login']); // Lo mandamos fuera
  }
}