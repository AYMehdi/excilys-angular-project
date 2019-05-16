import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MOCK_RECIPES } from '../recipe/recipe.mock';
import { Recipe } from '../recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('10.0.1.39:8080/api/v1/recipes');
  }
}