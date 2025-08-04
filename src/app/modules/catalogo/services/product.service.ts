import { Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  getProductos(): Product[] {
    return [
      {
        id: 1,
        nombre: 'Trompo mágico',
        descripcion: 'Trompo con luces LED y sonidos divertidos.',
        precio: 4990,
        imagenUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        nombre: 'Muñeca parlante',
        descripcion: 'Muñeca que habla y canta canciones.',
        precio: 8990,
        imagenUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        nombre: 'Bloques de construcción',
        descripcion: 'Set de 100 piezas para armar.',
        precio: 10990,
        imagenUrl: 'https://via.placeholder.com/150'
      }
    ];
  }
}
