import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.simplyrecipes.com/thmb/trN7dD0wpgfPs8ArTWySkrjaMdQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Brushetta-With-Tomato-And-Basil-Lead-Shot-6b-e52628e5a6f14fc3af66de40e8f5b035.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),

    new Recipe(
      'A TTTTTTTest Recipe',
      'This is simply a ttttttttttest',
      'https://www.simplyrecipes.com/thmb/trN7dD0wpgfPs8ArTWySkrjaMdQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Brushetta-With-Tomato-And-Basil-Lead-Shot-6b-e52628e5a6f14fc3af66de40e8f5b035.jpg',
      [new Ingredient('Buns', 2), new Ingredient('aaaaa', 3)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
