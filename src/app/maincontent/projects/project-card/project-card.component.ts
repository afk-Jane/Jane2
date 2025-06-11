import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../project.model';
import {
  trigger,
  style,
  animate,
  transition,
  state,
  animation,
} from '@angular/animations';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,

  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  animations: [
    trigger('overlaySlide', [
      state('hidden', style({ transform: 'translateY(100%)' })),
      state('visible', style({ transform: 'translateY(40%)' })),
      transition('hidden => visible', [animate('300ms ease-in-out')]),
      transition('visible => hidden', [animate('300ms ease-in-out')]),
    ]),
    trigger('buttonsSlide', [
      state('hidden', style({ transform: 'translateY(-100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('hidden => visible', [animate('300ms 100ms ease-out')]),
      transition('visible => hidden', [animate('200ms ease-in')]),
    ]),
    trigger('blurImage', [
      state('normal', style({ filter: 'blur(0px)' })),
      state('blurred', style({ filter: 'blur(4px)' })),
      transition('normal <=> blurred', [animate('300ms ease-in-out')]),
    ])
  ]
})

export class ProjectCardComponent {
  @Input() project!: Project;
  isHovered = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
