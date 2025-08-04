import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  { 
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) 
  }, 
  { 
    path: 'catalogo', loadChildren: () => import('./modules/catalogo/catalogo.module').then(m => m.CatalogoModule) 
  }, 
  { 
  path: 'carrito', 
  loadChildren: () => import('./modules/carrito/carrito.module').then(m => m.CarritoModule) 
},
  { 
    path: '**', redirectTo: 'home' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
