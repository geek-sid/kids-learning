import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-english',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './english.component.html',
  styleUrl: './english.component.scss'
})
export class EnglishComponent {
  activities = [
    {
      id: 'alphabet',
      name: 'Alphabet',
      icon: '🔤',
      description: 'Learn A to Z'
    },
    {
      id: 'words',
      name: 'Words',
      icon: '📝',
      description: 'Build your vocabulary'
    },
    {
      id: 'stories',
      name: 'Stories',
      icon: '📖',
      description: 'Read fun stories'
    }
  ];
}
