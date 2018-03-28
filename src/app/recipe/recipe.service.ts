import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe.model';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

@Injectable()
export class RecipeService {

  private recipeUrl = 'api/ISHISH';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  getRecipeById(id: string): Observable<Recipe> {
    let urlById = `${this.recipeUrl}/${id}`;
    return this.http.get<Recipe>(urlById);
  }

  addRecipe(recipe: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(this.recipeUrl, recipe);
  }

  deleteRecipe(id: number): Observable<Recipe>{
    let urlById = `${this.recipeUrl}/${id}`;
    return this.http.delete<Recipe>(urlById);
  }

}
