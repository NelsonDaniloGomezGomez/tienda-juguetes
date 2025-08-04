// src/app/modules/carrito/carrito.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './carrito.component';
import { CarritoListaComponent } from './components/carrito-lista/carrito-lista.component';

@NgModule({
  declarations: [
    CarritoComponent,
    CarritoListaComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule
  ]
})
export class CarritoModule {}
