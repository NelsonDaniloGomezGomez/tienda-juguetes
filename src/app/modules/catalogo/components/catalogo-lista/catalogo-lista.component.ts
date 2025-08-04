import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from '../../services/product.service';
import { CarritoService } from 'src/app/shared/services/carrito.service';

@Component({
  selector: 'app-catalogo-lista',
  templateUrl: './catalogo-lista.component.html',
  styleUrls: ['./catalogo-lista.component.scss']
})
export class CatalogoListaComponent implements OnInit {
  productos: Product[] = [];

  constructor(
    private productService: ProductService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.productos = this.productService.getProductos();
  }

  agregarAlCarrito(producto: Product) {
    this.carritoService.agregarProducto(producto);
  }
}
