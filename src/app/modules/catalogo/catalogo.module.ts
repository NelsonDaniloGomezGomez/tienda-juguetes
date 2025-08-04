import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { CatalogoListaComponent } from './components/catalogo-lista/catalogo-lista.component';


@NgModule({
  declarations: [CatalogoComponent, CatalogoListaComponent],
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ]
})
export class CatalogoModule { }
