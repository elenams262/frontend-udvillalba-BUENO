import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

// Definimos la interfaz aquí para usarla también en el Home
export interface Player {
  name: string;
  position: string;
  number: number;
  image: string; // Nombre del archivo (ej: "foto.jpg")
  video: string; // Nombre del archivo (ej: "video.mp4")
}

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css'],
})
export class PlayerCardComponent {
  @Input({ required: true }) player!: Player;
  
  // Referencia al elemento de video del HTML
  @ViewChild('videoPlayer') videoElement!: ElementRef<HTMLVideoElement>;

  // Inyectamos ApiService como 'public' para usar la URL en el HTML
  constructor(public api: ApiService) {}

  onMouseEnter() {
    if (this.videoElement && this.videoElement.nativeElement) {
      const video = this.videoElement.nativeElement;
      // Validamos que tenga fuente antes de reproducir
      if (video.src) {
        video.muted = true; // Importante para que el navegador permita el autoplay
        video.play().catch(err => console.warn('Autoplay bloqueado:', err));
      }
    }
  }

  onMouseLeave() {
    if (this.videoElement && this.videoElement.nativeElement) {
      const video = this.videoElement.nativeElement;
      video.pause();
      video.currentTime = 0; // Reinicia el video al principio
    }
  }
}