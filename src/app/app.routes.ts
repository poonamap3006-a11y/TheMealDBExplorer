import { Routes } from '@angular/router';
import { SearchMeal } from './search-meal/search-meal';
import { MealDetailsComponent } from './meal-details-component/meal-details-component';
import { RandomMealComponent } from './random-meal-component/random-meal-component';
import { CategoryBrowserComponent } from './category-browser-component/category-browser-component';


export const routes: Routes = [
    { path: '', component: SearchMeal },
    { path: 'random', component: RandomMealComponent },
    { path: 'meal/:id', component: MealDetailsComponent },
    { path: 'categories', component: CategoryBrowserComponent},
    { path: '**', redirectTo: '' }
];
