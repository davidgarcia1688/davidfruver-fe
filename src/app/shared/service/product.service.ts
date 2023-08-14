import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  BASE_URL = 'http://localhost:4000';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Producto[]>(`${this.BASE_URL}/productos`);
  }
  getProduct(idProducto: string) {
    return this.http.get<Producto>(
      `${this.BASE_URL}/productos/${idProducto}`
    );
  }
  createProduct(producto: Producto) {
    return this.http.post<string>(`${this.BASE_URL}/productos`, producto);
  }
  updateProduct(producto: Producto) {
    return this.http.put<string>(`${this.BASE_URL}/productos`, producto);
  }
  removeProduct(idProducto: string) {
    return this.http.delete<string>(`${this.BASE_URL}/productos/${idProducto}`);
  }
}
