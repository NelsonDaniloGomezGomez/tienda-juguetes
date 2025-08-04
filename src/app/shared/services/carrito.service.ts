// src/app/shared/services/carrito.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

export interface ProductoCarrito extends Product {
  cantidad: number;
}

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private productos: ProductoCarrito[] = [];

  agregarProducto(producto: Product) {
    const item = this.productos.find(p => p.id === producto.id);
    if (item) {
      item.cantidad++;
    } else {
      this.productos.push({ ...producto, cantidad: 1 });
    }
  }

  obtenerProductos(): ProductoCarrito[] {
    return this.productos;
  }

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
  }

  limpiarCarrito() {
    this.productos = [];
  }

  obtenerTotal(): number {
    return this.productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  }
}
