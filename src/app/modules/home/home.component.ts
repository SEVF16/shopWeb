import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  title = 'shopWeb';
  slideimg = [
    "https://images4.alphacoders.com/936/thumb-1920-936378.jpg",
    "https://i.pinimg.com/originals/fe/9c/6b/fe9c6be5759c12298688b2dd97cd5fd1.jpg",
    "https://www.xtrafondos.com/descargar.php?id=3963&resolucion=1920x1080"
  ]
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuOpen = true
  }
}
