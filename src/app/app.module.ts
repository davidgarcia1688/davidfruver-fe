import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComprasComponent } from './compras/compras.component';
import { ProductosCrearComponent } from './productos-crear/productos-crear.component';
import { ProductoService } from './shared/service/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ClientesComponent,
    ComprasComponent,
    ProductosCrearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  providers: [ProductoService]
})
export class AppModule { }
