import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para las fechas y @if
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-proximo-partido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proximo-partido.component.html',
  styleUrl: './proximo-partido.component.css',
})
export class ProximoPartidoComponent implements OnInit {
  partido: any = null;

  constructor(private api: ApiService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('ProximoPartidoComponent iniciado');
    // Aquí pedimos los datos al cargar este componente
    this.api.getProximoPartido().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.partido = data;
        this.cd.detectChanges(); // Forzar actualización de la vista
      },
      error: (err) => {
        console.error('Error cargando partido:', err);
      },
    });
  }
}
