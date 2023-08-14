import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from '../shared/service/product.service';
import { Producto } from '../shared/model/producto.model';

@Component({
  selector: 'app-productos-crear',
  templateUrl: './productos-crear.component.html',
  styleUrls: ['./productos-crear.component.css']
})
export class ProductosCrearComponent implements OnInit {
  id = '';
  producto: Producto = new Producto(null, '', '', 0, '', 0);

  constructor(private service: ProductoService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.service.getProduct((this.id)).subscribe((data: Producto) => {
        this.producto = data;
      });
    }
  }

  cargarFoto(event: any) {
    const file: File = event.target.files[0];
    this.encodeImageFileAsBase64(file);
  }

  encodeImageFileAsBase64(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.producto.foto = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  borrar() {
    this.producto.foto = "";
  }

  almacenar() {
    console.log(this.producto);

    if (this.producto.idproducto) {
      this.service.updateProduct(this.producto).subscribe((data: any) => {
        this.router.navigate(['/']);
      });
    }
    else {
      this.service.createProduct(this.producto).subscribe((data: any) => {
        this.router.navigate(['/']);
      });
    }
  }
}
