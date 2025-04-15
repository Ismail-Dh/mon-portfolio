
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.setupScrollAnimations();
      this.setupResizeHandler();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.observer?.disconnect();
      this.resizeObserver?.disconnect();
    }
  }

  private setupScrollAnimations() {
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target;
        
        // Réinitialiser les animations à chaque vérification
        element.classList.remove('animate', 'animate-border');
        
        if (entry.isIntersecting) {
          if (element.classList.contains('profile-image-container')) {
            element.classList.add('animate');
          }
          
          if (element.classList.contains('description-container')) {
            element.classList.add('animate', 'animate-border');
          }
          
          if (element.classList.contains('highlight-text')) {
            element.classList.add('animate');
          }
          
          if (element.classList.contains('bio-text')) {
            element.classList.add('animate');
          }
        }
      });
    }, {
      threshold: 0.2, // Augmenté pour plus de stabilité
      rootMargin: '0px 0px -20% 0px' // Détecte l'intersection plus tôt
    });

    this.observeElements();
  }

  private observeElements() {
    if (!this.observer) return;
  
    // Solution 1: Convertir en Array
    const elements = Array.from(document.querySelectorAll('.profile-image-container'))
      .concat(Array.from(document.querySelectorAll('.description-container')))
      .concat(Array.from(document.querySelectorAll('.highlight-text')))
      .concat(Array.from(document.querySelectorAll('.bio-text')));
  
    elements.forEach(el => this.observer?.observe(el));
  }

  private setupResizeHandler() {
    if (!this.isBrowser || typeof ResizeObserver === 'undefined') return;

    this.resizeObserver = new ResizeObserver(() => {
      // Réinitialiser toutes les animations lors du redimensionnement
      document.querySelectorAll('.animate, .animate-border').forEach(el => {
        el.classList.remove('animate', 'animate-border');
      });
      
      // Réobserver les éléments après un léger délai
      setTimeout(() => {
        this.observer?.disconnect();
        this.setupScrollAnimations();
      }, 100);
    });

    this.resizeObserver.observe(document.body);
  }
}