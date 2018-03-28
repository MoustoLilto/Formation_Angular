import { Recipe } from './../../model/recipe.model';
import { RecipeService } from './../recipe.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent {

  modelForm: FormGroup;
  model: Recipe;

  constructor(private fb: FormBuilder, private recipeService: RecipeService, private router: Router) {
    this.createForm();
   }

   createForm(){
     this.modelForm = this.fb.group({
      name: ['', Validators.required],
      picture: ['', Validators.required],
      description: ['', Validators.required]
     })
   }

  sendRecipe(): void{
    this.model = new Recipe();
    this.model.name = this.modelForm.controls.name.value;
    this.model.picture = this.modelForm.controls.picture.value;
    this.model.description = this.modelForm.controls.description.value;
    this.recipeService.addRecipe(this.model)
      .subscribe(() => {
        this.router.navigate(['/recipes']);
      });
  }
}
