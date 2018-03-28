import { Ingredient } from './ingredients.model';

export class Recipe{

    id: number;
    name: string;
    picture: string;
    description: string;
    instructions: string[];
    ingredients: Ingredient[];

}