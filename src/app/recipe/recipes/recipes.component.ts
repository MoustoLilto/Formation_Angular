import { RecipeService } from './../recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{

  recipes: Recipe[];

  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.getRecipes();
  }

  getRecipes(): void{
    this.recipeService.getRecipes().subscribe(recipes =>
      this.recipes = recipes
    );
  }

  deletedRecipe(recipe: Recipe) {
    const indexRecipe = this.recipes.indexOf(recipe);
    this.recipes.splice(indexRecipe, 1);
  }
}
