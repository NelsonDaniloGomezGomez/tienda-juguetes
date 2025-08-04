import { Component, OnInit } from '@angular/core';
import { CarritoService, ProductoCarrito } from 'src/app/shared/services/carrito.service';

@Component({
  selector: 'app-carrito-lista',
  templateUrl: './carrito-lista.component.html',
  styleUrls: ['./carrito-lista.component.scss']
})
export class CarritoListaComponent implements OnInit {
  productos: ProductoCarrito[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.productos = this.carritoService.obtenerProductos();
  }
  
  eliminar(id: number) {
    this.carritoService.eliminarProducto(id);
    this.productos = this.carritoService.obtenerProductos();
  }

  total(): number {
    return this.carritoService.obtenerTotal();
  }
}
