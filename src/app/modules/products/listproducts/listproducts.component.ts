import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product.interfaces';
import { Observable, forkJoin, take } from 'rxjs';
import { Category } from 'src/app/core/interfaces/category.ionterfaces';
@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {
  categories: Category[] = [];
  products: { [key: number]: Product[] } = {};
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //this.getProducts();
    this.getCategories();
    this.getCategoriesAndProducts();
  }

  // getProducts() {
  //   this.productService.getProducts().subscribe({
  //     next: (data) => {
  //       // Tomar solo los primeros 6 productos del arreglo.
  //       this.products = data.slice(0, 4);
  //     },
  //     error: (error) => {
  //       console.error(error);
  //     }
  //   });
  // }

  getCategories() {
    this.productService.getCategories().subscribe({
      next: (data) => {
        this.categories = data.slice(0, 4);
      },
      error: (error) => {
        console.error(error);
      }
    });
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
}
