import { Component } from '@angular/core';
import { SplitSectionComponent } from '../split-section/split-section.component'; 

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    SplitSectionComponent
  ], 
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})

export class AboutMeComponent {
  aboutFeatures = [
  { icon: 'shared/icons/lightbulb.png', label: 'Banana' },
  { icon: 'shared/icons/location-pin.png', label: 'spricht frei' },
  { icon: 'shared/icons/puzzle.png', label: 'Pustekuchen' },
];
}