import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ComprasComponent } from './compras/compras.component';
import { ProductosCrearComponent } from './productos-crear/productos-crear.component';

const routes: Routes = [

  { path: '', component: ComprasComponent},
  { path: 'compras', component: ComprasComponent},

  { path: 'productos/crear', component: ProductosCrearComponent},
  { path: 'productos/editar/:id', component: ProductosCrearComponent},
  { path: 'productos', component: ProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
