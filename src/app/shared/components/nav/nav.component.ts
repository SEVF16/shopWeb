import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Category } from 'src/app/core/interfaces/category.ionterfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isMenuOpen: boolean = false;
  categories: Category[] = [];
  constructor(private elementRef: ElementRef, private serviceCategory: ProductService) {}

  ngOnInit(): void {
    this.getCategoriesAndProducts()
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    this.isMenuOpen = clickedInside;

  }

  getCategoriesAndProducts() {
    this.serviceCategory.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }


}
