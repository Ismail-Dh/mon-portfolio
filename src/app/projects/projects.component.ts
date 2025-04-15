import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s cubic-bezier(0.35, 0, 0.25, 1)', 
        style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  activeCategory = 'all';
  
  categories = [
    { name: 'Tous', value: 'all', icon: 'fas fa-layer-group' },
    { name: 'Web', value: 'web', icon: 'fas fa-globe' },
    { name: 'Mobile', value: 'mobile', icon: 'fas fa-mobile-alt' },
    { name: 'Desktop', value: 'desktop', icon: 'fas fa-desktop' },
    { name: 'Data', value: 'data', icon: 'fa-solid fa-database' },
    { name: 'Game', value: 'game', icon: 'fa fa-gamepad' }
  ];

  projects = [
    {
      title: 'Location de Voitures',
      description: 'Application web pour réserver et gérer la location de voitures avec authentification sécurisée.',
      category: 'web',
      tools: ['Angular', 'Spring Boot', 'Spring Security', 'MySQL', 'UML', 'Postman'],
      image: 'assets/car.webp',
      demoUrl: '#',
      codeUrl: 'https://github.com/Ismail-Dh/projet_location_voiture_backend'
    },
    {
      title: 'Centre de Formation',
      description: 'Gestion des inscriptions, plannings et utilisateurs d’un centre de formation.',
      category: 'web',
      tools: ['PHP', 'HTML', 'CSS', 'Bootstrap', 'Merise', 'MySQL'],
      image: 'assets/formation.jpeg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Système Bancaire',
      description: 'Application de gestion bancaire avec opérations de comptes.',
      category: 'desktop',
      tools: ['C++'],
      image: 'assets/bancaire.webp',
      demoUrl: '#',
      codeUrl: 'https://github.com/Ismail-Dh/projet_gestion_bancaire.git'
    },
    {
      title: 'Gestion des Tâches',
      description: 'Application de bureau pour organiser les tâches personnelles ou d’équipe.',
      category: 'desktop',
      tools: ['Java', 'Swing', 'MongoDB'],
      image: 'assets/tache.jpeg',
      demoUrl: '#',
      codeUrl: 'https://github.com/Ismail-Dh/projet_gestion_des_taches'
    },
    {
      title: 'Traitement d’Images',
      description: 'Scripts Python pour appliquer des filtres, transformations et détection sur des images.',
      category: 'data',
      tools: ['Python'],
      image: 'assets/image.jpeg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Gestion de Projets Académiques',
      description: 'Plateforme pour planifier, suivre et archiver les projets des étudiants.',
      category: 'web',
      tools: ['Angular', 'Spring Boot', 'MongoDB'],
      image: 'assets/projet.png',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Application de Voyages',
      description: 'Application mobile pour organiser des voyages et gérer les réservations.',
      category: 'mobile',
      tools: ['Java'],
      image: 'assets/voyage.jpeg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Jeu Snake',
      description: 'Version classique du jeu Snake développée en Python.',
      category: 'game',
      tools: ['Python'],
      image: 'assets/snake.jpeg',
      demoUrl: '#',
      codeUrl: '#'
    }
  ];
  

  filteredProjects = this.projects;

  filterProjects(category: string) {
    this.activeCategory = category;
    this.filteredProjects = category === 'all' 
      ? this.projects 
      : this.projects.filter(p => p.category === category);
  }
  getToolIcon(tool: string): string {
    const icons: { [key: string]: string } = {
      'Angular': 'fab fa-angular',
      'React': 'fab fa-react',
      'Node.js': 'fab fa-node-js',
      'MongoDB': 'fas fa-database',
      'MySQL': 'fas fa-database',
      'Spring Boot': 'fas fa-leaf',
      'Spring Security': 'fas fa-shield-alt',
      'PHP': 'fab fa-php',
      'HTML': 'fab fa-html5',
      'CSS': 'fab fa-css3-alt',
      'Bootstrap': 'fab fa-bootstrap',
      'JavaScript': 'fab fa-js',
      'TypeScript': 'fab fa-js',
      'Java': 'fab fa-java',
      'Python': 'fab fa-python',
      'C++': 'fas fa-code',
      'Swing': 'fas fa-desktop',
      'Postman': 'fas fa-envelope-open-text',
      'UML': 'fas fa-project-diagram',
      'Merise': 'fas fa-sitemap',
      'Stripe': 'fas fa-credit-card',
      'Firebase': 'fas fa-fire',
      'Flutter': 'fas fa-mobile-screen',
      'Electron': 'fas fa-desktop',
      'D3.js': 'fas fa-chart-line',
      'Express': 'fas fa-server',
    };
    return icons[tool] || 'fas fa-tools';
  }
  
}
