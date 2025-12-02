import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MealService } from '../meal-service';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../safe-url-pipe';

@Component({
  selector: 'app-random-meal-component',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './random-meal-component.html',
  styleUrl: './random-meal-component.scss',
})
export class RandomMealComponent implements OnInit {
  meal: any = null;

  constructor(private mealService: MealService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.getRandomMeal();
  }

  getRandomMeal() {
    this.mealService.getRandomMeal().subscribe((res: any) => {
      this.meal = res.meals[0];
      this.cdr.detectChanges();
    });
  }
}
