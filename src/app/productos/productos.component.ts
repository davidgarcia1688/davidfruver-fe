import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../shared/service/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: any = [];

  constructor(private service: ProductoService, private router: Router) {
    this.service.getProducts().subscribe((data) => {
      this.productos = data;
    });
  }

  crear() {
    this.router.navigate(['productos/crear']);
  }

  editar(producto: { idproducto: string; }) {
    this.router.navigate([`productos/editar/${producto.idproducto}`]);
  }

  eliminar(producto: { idproducto: string; nombreproducto: string }, index: any) {
    if (
      window.confirm(`Está seguro de eliminar el producto ${producto.nombreproducto}?`)
    ) {
      this.service.removeProduct(producto.idproducto).subscribe(
      (data) => {
        this.service.getProducts().subscribe((data) => {
          this.productos = data;
        });
      },
      () => {

      });
    }
  }
}
