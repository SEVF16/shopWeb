import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interfaces';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrlProduct = 'https://api.escuelajs.co/api/v1/products';
  private apiUrlCategorie = 'https://api.escuelajs.co/api/v1/categories';
  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrlProduct);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlCategorie).pipe(
      map((data: any[]) => data.slice(0, 5))
    );
  }

  getProductsByCategoryId(categoryId: number): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrlProduct}/?categoryId=${categoryId}`)
      .pipe(
        map((data: any[]) => data.slice(0, 8))
      );
  }
}
