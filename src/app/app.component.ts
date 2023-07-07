import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
