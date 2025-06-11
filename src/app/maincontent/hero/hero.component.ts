import { Component } from '@angular/core';
import { MiniContactComponent } from './mini-contact/mini-contact.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    MiniContactComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
