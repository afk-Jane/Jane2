import { Component } from '@angular/core';
import { Project } from './project.model';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      image: 'img/with_frame/join_framed.png',
      liveLink: 'https://example.com/join',
      githubLink: 'https://github.com/example/join'
    },
    {
      title: 'Sharkie',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie to find coins and potions to fight and defeat enemies.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      image: 'img/with_frame/sharkie_framed.png',
      liveLink: 'https://example.com/sharkie',
      githubLink: 'https://github.com/example/sharkie'
    },
    {
      title: 'Simple CRM',
      description: 'A very simple Customer Relationship Management system working with CRUD functionality.',
      tech: ['Angular', 'Firebase'],
      image: 'img/with_frame/crm_framed.png',
      liveLink: 'https://example.com/crm',
      githubLink: 'https://github.com/example/crm'
    },
    {
      title: 'Pokédex',
      description: 'Based on the PokéAPI, a simple library that provides and categorizes Pokémon information.',
      tech: ['JavaScript', 'HTML', 'CSS', 'API'],
      image: 'img/with_frame/pokedex_framed.png',
      liveLink: 'https://example.com/pokedex',
      githubLink: 'https://github.com/example/pokedex'
    },
    {
      title: 'DA Bubble',
      description: 'This App is a Slack Clone. Real-time communication, live chat, real-time messaging and group chat channel organization.',
      tech: ['Angular', 'TypeScript', 'Firebase'],
      image: 'img/with_frame/dabubble_framed.png',
      liveLink: 'https://example.com/dabubble',
      githubLink: 'https://github.com/example/dabubble'
    }
  ];
}