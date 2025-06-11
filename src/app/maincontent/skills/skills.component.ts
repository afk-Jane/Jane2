import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
    skills = [
    { name: 'HTML', icon: '/icons/skills/html5.png' },
    { name: 'CSS', icon: '/icons/skills/css.png' },
    { name: 'JavaScript', icon: '/icons/skills/js.png' },
    { name: 'Angular', icon: '/icons/skills/ng.png' },
    { name: 'TypeScript', icon: '/icons/skills/ts.png' },
    { name: 'Git', icon: '/icons/skills/git.png' },
    { name: 'Rest-API', icon: '/icons/skills/rest-api.png' },
    { name: 'Scrum', icon: '/icons/skills/scrum.png' },
  ];
}
