import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maths',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './maths.component.html',
  styleUrl: './maths.component.scss'
})
export class MathsComponent {
  activities = [
    {
      id: 'counting',
      name: 'Counting',
      icon: '🔢',
      description: 'Count from 1 to 100'
    },
    {
      id: 'addition',
      name: 'Addition',
      icon: '➕',
      description: 'Add numbers together'
    },
    {
      id: 'subtraction',
      name: 'Subtraction',
      icon: '➖',
      description: 'Subtract numbers'
    }
  ];
}
