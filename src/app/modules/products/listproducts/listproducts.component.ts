import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product.interfaces';
import { Observable, forkJoin, take } from 'rxjs';
import { Category } from 'src/app/core/interfaces/category.ionterfaces';
import { CartService } from 'src/app/core/services/cart.service';
@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {
  categories: Category[] = [];
  products: { [key: number]: Product[] } = {};
  constructor(private productService: ProductService, private carritoService: CartService) { }

  ngOnInit(): void {
    this.getCategoriesAndProducts();
  }

  getCategoriesAndProducts() {
    this.productService.getCategories().subscribe((categories) => {
      this.categories = categories;
      const productObservables: Observable<Product[]>[] = categories.map(
        (category) => {
          return this.productService.getProductsByCategoryId(category.id);
        }
      );

      forkJoin(productObservables).subscribe((results) => {
        results.forEach((products, index) => {
          this.products[categories[index].id] = products;
          console.log(products);
        });
      });
    });
  }

  agregarAlCarrito(item: any) {
    this.carritoService.agregarAlCarrito(item);
  }
}
