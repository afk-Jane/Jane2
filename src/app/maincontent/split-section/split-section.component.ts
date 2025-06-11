import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-split-section',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './split-section.component.html',
  styleUrls: ['./split-section.component.scss'],
})
export class SplitSectionComponent {
  @Input() title : string = '';
  @Input() text : string = '';
  @Input() features: { icon: string; label: string }[] = [];
  @Input() imageSrc! : string;
  @Input() reverse = false; 
}
