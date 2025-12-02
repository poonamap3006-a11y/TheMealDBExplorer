import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = 'http://localhost:8080/api/meal'; // Backend URL

  constructor(private http: HttpClient) {}

  // Search meals by name
  searchMeals(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/${name}`);
  }

  // Get random meal
  getRandomMeal(): Observable<any> {
    return this.http.get(`${this.apiUrl}/random`);
  }

  // Get meal by ID (optional if you add details endpoint)
  getMealById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/allCategories`);
  }

  getMealsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getCategorieItem/${category}`);
  }
}
