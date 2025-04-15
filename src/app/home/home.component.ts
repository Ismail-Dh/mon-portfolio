import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { EducationComponent } from '../education/education.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent,EducationComponent,ProjectsComponent,SkillsComponent,ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 nom="Ismail Damouh";
 charCount = this.nom.length;
}
