import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carrito: any[] = [];
  private carritoSubject = new BehaviorSubject<any[]>(this.carrito);
  public carrito$ = this.carritoSubject.asObservable();

  constructor() { }

  agregarAlCarrito(producto: Product) {
    const itemEnCarrito = this.carrito.find((item) => item.id === producto.id);

    if (itemEnCarrito) {
      itemEnCarrito.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }

    this.carritoSubject.next(this.carrito);
  }

  aumentarCantidad(producto: Product) {
    producto.cantidad++;
    this.carritoSubject.next(this.carrito);
  }

  disminuirCantidad(producto: Product) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
      this.carritoSubject.next(this.carrito);
    }
  }

  calcularTotal(): number {
    return this.carrito.reduce((total, producto) => total + producto.price * producto.cantidad, 0);
  }
}
