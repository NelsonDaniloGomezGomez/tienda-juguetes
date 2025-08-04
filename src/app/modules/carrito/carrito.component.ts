import { Component, OnInit } from '@angular/core';
import { CarritoService, ProductoCarrito } from 'src/app/shared/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  productos: ProductoCarrito[] = [];

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.productos = this.carritoService.obtenerProductos();
  }

  eliminarProducto(id: number) {
    this.carritoService.eliminarProducto(id);
    this.productos = this.carritoService.obtenerProductos();
  }

  getTotal(): number {
    return this.carritoService.obtenerTotal();
  }

}
