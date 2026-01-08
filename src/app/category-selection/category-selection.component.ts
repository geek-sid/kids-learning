import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-selection',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './category-selection.component.html',
  styleUrl: './category-selection.component.scss'
})
export class CategorySelectionComponent {
  categories = [
    {
      id: 'english',
      name: 'English',
      icon: '📚',
      color: '#FF6B6B',
      description: 'Learn letters, words, and stories!'
    },
    {
      id: 'maths',
      name: 'Maths',
      icon: '🔢',
      color: '#4ECDC4',
      description: 'Count, add, subtract, and have fun with numbers!'
    }
  ];

  onCategorySelect(categoryId: string) {
    // Animation will be handled by router navigation
  }
}
