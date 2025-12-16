import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuDiario {
  dia: string;
  desayuno: string;
  comida: string;
  cena: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menuSemanal: MenuDiario[] = [
    {
      dia: 'Lunes',
      desayuno: 'Tostada integral con aguacate y huevo',
      comida: 'Lentejas estofadas con verduras',
      cena: 'Salmón a la plancha con espárragos',
    },
    {
      dia: 'Martes',
      desayuno: 'Porridge de avena con frutos rojos',
      comida: 'Pechuga de pollo al limón con quinoa',
      cena: 'Ensalada caprese y tortilla francesa',
    },
    {
      dia: 'Miércoles',
      desayuno: 'Yogur griego con nueces y miel',
      comida: 'Pasta integral con salsa de tomate casera y atún',
      cena: 'Merluza al horno con patatas panadera',
    },
    {
      dia: 'Jueves',
      desayuno: 'Batido de plátano, espinacas y leche de almendras',
      comida: 'Arroz integral con pavo y verduras salteadas',
      cena: 'Crema de calabaza y huevo poché',
    },
    {
      dia: 'Viernes',
      desayuno: 'Tostada de pan de centeno con tomate y aceite',
      comida: 'Garbanzos con espinacas y bacalao',
      cena: 'Pizza casera con base de coliflor',
    },
    {
      dia: 'Sábado',
      desayuno: 'Tortitas de avena y plátano',
      comida: 'Ternera guisada con zanahorias y guisantes',
      cena: 'Wok de verduras con tofu',
    },
    {
      dia: 'Domingo',
      desayuno: 'Bol de frutas variadas y semillas de chía',
      comida: 'Paella de verduras y pollo',
      cena: 'Sopa de fideos y pescado blanco',
    },
  ];
}
