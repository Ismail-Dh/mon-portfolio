import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SkillsComponent {
  activeCategory = 'all';
  
  categories = [
    { name: 'Toutes', value: 'all', icon: 'fas fa-star' },
    { name: 'Frontend', value: 'frontend', icon: 'fas fa-code' },
    { name: 'Backend', value: 'backend', icon: 'fas fa-server' },
    { name: 'Bases de données', value: 'database', icon: 'fas fa-database' },
    { name: 'Outils', value: 'tools', icon: 'fas fa-tools' }
  ];

  skillIcons: {[key: string]: string} = {
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
    'C': 'fas fa-code',
    'C++': 'fas fa-code',
    'J2EE': 'fab fa-java',
    'Docker': 'fab fa-docker',
    'Git': 'fab fa-git-alt',
    'GitHub': 'fab fa-github',
    'GitLab': 'fab fa-gitlab',
    'Jenkins': 'fab fa-jenkins',
    'Neo4j': 'fas fa-project-diagram',
    'Stripe': 'fas fa-credit-card',
    'Firebase': 'fas fa-fire',
    'Flutter': 'fas fa-mobile-screen',
    'Electron': 'fas fa-desktop',
    'D3.js': 'fas fa-chart-line',
    'Express': 'fas fa-server',
    'Swing': 'fas fa-desktop',
    'Postman': 'fas fa-envelope-open-text',
    'UML': 'fas fa-project-diagram',
    'Merise': 'fas fa-sitemap'
  };

  skills = [
    { name: 'Angular', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'HTML', category: 'frontend' },
    { name: 'CSS', category: 'frontend' },
    { name: 'Bootstrap', category: 'frontend' },
    { name: 'Java', category: 'backend' },
    { name: 'J2EE', category: 'backend' },
    { name: 'Spring Boot', category: 'backend' },
    { name: 'Python', category: 'backend' },
    { name: 'PHP', category: 'backend' },
    { name: 'C', category: 'backend' },
    { name: 'C++', category: 'backend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'MySQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'Neo4j', category: 'database' },
    { name: 'Git', category: 'tools' },
    { name: 'GitHub', category: 'tools' },
    { name: 'GitLab', category: 'tools' },
    { name: 'Jenkins', category: 'tools' },
    { name: 'Docker', category: 'tools' },
    { name: 'Postman', category: 'tools' }
  ];

  filteredSkills = this.skills;

  filterSkills(category: string) {
    this.activeCategory = category;
    this.filteredSkills = category === 'all' 
      ? this.skills 
      : this.skills.filter(skill => skill.category === category);
  }
}
