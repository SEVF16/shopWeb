import { Component, OnInit } from '@angular/core';

interface Producto {
  nombre: string;
  imagen: string;
  cantidad: number;
  precio: number;
  }
@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {

  }

  aumentarCantidad(producto: Producto): void {
    producto.cantidad++;
  }

  disminuirCantidad(producto: Producto): void {
    if (producto.cantidad > 1) {
      producto.cantidad--;
    }
  }

}
