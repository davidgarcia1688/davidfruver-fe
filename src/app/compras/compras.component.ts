import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../shared/model/producto.model';
import { ProductoService } from '../shared/service/product.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  productos: any = [];
  carrito: any = [];

  constructor(
    private service: ProductoService,
    private router: Router
  ) {
    this.readProduct();
  }
  ngOnInit(): void {
  }

  readProduct() {
    this.service.getProducts().subscribe((data) => {
      this.productos = data;
    });
  }

  agregar(producto: Producto) {
    this.carrito.push(producto);
  }

  eliminar(producto: Producto, indice: any){
    this.carrito.splice(indice,1);
  }

  facturar(){
    let totalCantidad = 0;
    let totalFactura = 0;
    this.carrito.forEach((element: Producto) => {
      totalCantidad += element.cantidad;
      totalFactura += element.precioproducto * element.cantidad;
    });

    if (
      window.confirm(`Desea confirmar la compra con un total de ${totalCantidad} producto(s) y un valor de
      ${totalFactura}?`)
    ) {
      alert("Compra exitosa");
      this.router.navigate(['/productos']);
    }
  }

}
