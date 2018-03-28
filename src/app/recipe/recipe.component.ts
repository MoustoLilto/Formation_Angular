import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from './recipe.service';
import { Recipe } from './../model/recipe.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent{

  @Input() recipe: Recipe;
  @Output() deletedRecipe: EventEmitter<Recipe> = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

  isExpanded = false;
  toggleExpand(): void{
    this.isExpanded = !this.isExpanded;
  }

  deleteRecipe(): void{
    this.recipeService.deleteRecipe(this.recipe.id).subscribe(recipes =>
      {
        this.deletedRecipe.emit(this.recipe);
      }
    );
  }

}
