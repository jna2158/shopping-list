import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); // 부모 컴포넌트인 recipes.component.html로 데이터를 방출한다.

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.simplyrecipes.com/thmb/trN7dD0wpgfPs8ArTWySkrjaMdQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Brushetta-With-Tomato-And-Basil-Lead-Shot-6b-e52628e5a6f14fc3af66de40e8f5b035.jpg'
    ),

    new Recipe(
      'A TTTTTTTest Recipe',
      'This is simply a ttttttttttest',
      'https://www.simplyrecipes.com/thmb/trN7dD0wpgfPs8ArTWySkrjaMdQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Brushetta-With-Tomato-And-Basil-Lead-Shot-6b-e52628e5a6f14fc3af66de40e8f5b035.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
