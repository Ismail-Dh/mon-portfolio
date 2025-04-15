import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit {
  isMenuOpen = false;
  activeSection: string = 'home';
  isOnHomePage: boolean = true;
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkActiveSection();
      window.addEventListener('scroll', this.checkActiveSection.bind(this));
      
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isOnHomePage = event.url === '/' || event.url === '/#';
          if (this.isOnHomePage && this.isBrowser) {
            setTimeout(() => this.checkActiveSection(), 0);
          }
        }
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(section: string) {
    if (!this.isBrowser) return;
    
    this.activeSection = section;
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isMenuOpen = false;
  }

  checkActiveSection() {
    if (!this.isBrowser) return;

    const sections = ['home', 'about', 'education', 'projects', 'skills', 'contact'];
    const scrollPosition = window.pageYOffset + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.isBrowser) {
      this.checkActiveSection();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      window.removeEventListener('scroll', this.checkActiveSection.bind(this));
    }
  }
 
}
