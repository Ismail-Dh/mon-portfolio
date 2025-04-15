import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'mon-portfolio';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createMovingSymbols();
    }
  }

  createMovingSymbols(): void {
    const numberOfSymbols = 300;
    let container = document.getElementById('symbol-container');
  
    if (!container) {
      container = document.createElement('div');
      container.id = 'symbol-container';
      document.body.appendChild(container);
    }
  
    for (let i = 0; i < numberOfSymbols; i++) {
      const symbol = document.createElement('div');
      symbol.classList.add('symbol');
      symbol.textContent = '.';
  
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      symbol.style.left = `${x}px`;
      symbol.style.top = `${y}px`;
  
      const duration = Math.random() * 10 + 5;
      const delay = Math.random() * 5;
      symbol.style.animation = `float ${duration}s linear ${delay}s infinite`;
  
      container.appendChild(symbol);
    }
  }
  
}
