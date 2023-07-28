import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product.interfaces';
import { ProductService } from 'src/app/core/services/product.service';

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
  idM: any;
  detailProduct: Product[] = []
  constructor(private route: ActivatedRoute,private productService: ProductService,){}

  ngOnInit(): void {
    this.getProductDetail();
  }

  getProductDetail(){
    this.route.paramMap.subscribe( params => {
      this.idM = params.get('id')
      this.productService.getDetailProduct(this.idM).subscribe( (product) => {
        this.detailProduct.push(product)
      })

    })
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
