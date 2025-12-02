import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MealService } from '../meal-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-browser-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './category-browser-component.html',
  styleUrl: './category-browser-component.scss',
})
export class CategoryBrowserComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: string = '';
  filteredMeals: MealListItem[] = [];

  constructor(private mealService: MealService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    // Fetch all categories when the component loads
    this.mealService.getCategories().subscribe((response: any) => {
      this.categories = response.categories;
      this.cdr.detectChanges();
      this.onSelectCategory(response.categories[0].strCategory)
      this.cdr.detectChanges();
    });
  }

  onSelectCategory(categoryName: string): void {
    this.selectedCategory = categoryName;
    this.filteredMeals = [];

    this.cdr.detectChanges();

    this.mealService.getMealsByCategory(categoryName).subscribe((response: any) => {
      this.filteredMeals = response.meals || [];
      this.cdr.detectChanges();
    });
  }


}
// src/app/category.model.ts
export interface Category {
  idCategory: string;
  strCategory: string; // The name of the category (e.g., "Beef")
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface MealListItem {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}