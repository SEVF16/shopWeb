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
  slideimg = [
    "https://images4.alphacoders.com/936/thumb-1920-936378.jpg",
    "https://i.pinimg.com/originals/fe/9c/6b/fe9c6be5759c12298688b2dd97cd5fd1.jpg",
    "https://www.xtrafondos.com/descargar.php?id=3963&resolucion=1920x1080"
  ]
  aumentarCantidad(producto: Producto): void {
    producto.cantidad++;
  }

  disminuirCantidad(producto: Producto): void {
    if (producto.cantidad > 1) {
      producto.cantidad--;
    }
  }

}
