import { Routes } from '@angular/router';
import { CategorySelectionComponent } from './category-selection/category-selection.component';
import { EnglishComponent } from './english/english.component';
import { MathsComponent } from './maths/maths.component';
import { AdditionComponent } from './addition/addition.component';

export const routes: Routes = [
  {
    path: '',
    component: CategorySelectionComponent
  },
  {
    path: 'category/english',
    component: EnglishComponent
  },
  {
    path: 'category/maths',
    component: MathsComponent
  },
  {
    path: 'category/maths/addition',
    component: AdditionComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
