import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interfaces';
import { CartService } from 'src/app/core/services/cart.service';


interface Producto {
  nombre: string;
  imagen: string;
  cantidad: number;
  precio: number;
  }


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carritoSer: any[] = [];
  constructor(private carritoService: CartService) { }

  ngOnInit(): void {

    this.carritoService.carrito$.subscribe((carrito) => {
      this.carritoSer = carrito;
    });
  }


  aumentarCantidad(item: Product) {
    this.carritoService.aumentarCantidad(item);
  }

  disminuirCantidad(item: Product) {
    this.carritoService.disminuirCantidad(item);
  }


  calcularTotal(): number {
    return this.carritoSer.reduce((total, producto) => total + producto.price * producto.cantidad, 0);
  }

  limpiarCarrito(): void {
    this.carritoSer = [];
  }
}
