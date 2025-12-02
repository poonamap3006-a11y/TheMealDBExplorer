import { ChangeDetectorRef, Component } from '@angular/core';
import { MealService } from '../meal-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-meal',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search-meal.html',
   styleUrl: './search-meal.scss',
})
export class SearchMeal {
  meals: any[] = [];
  searchText: string = '';

  constructor(private mealService: MealService, private cdr: ChangeDetectorRef) {}

  searchMeals() {
    this.cdr.detectChanges();
    if(this.searchText.trim() !== '') {
      this.cdr.detectChanges();
      this.mealService.searchMeals(this.searchText).subscribe((res: any) => {
        this.meals = res.meals || [];
        this.cdr.detectChanges();
      });
    }
  }
}
