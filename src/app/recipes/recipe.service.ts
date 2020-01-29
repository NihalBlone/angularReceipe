import { Recipe } from './recipe.model'
import { Output, EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

  constructor(private slService: ShoppingListService){}

   recipes:  Recipe[] =  [ 
    new Recipe(
              "Steak",
               "Delicious Steak",
                "../assets/recipe/steak2.webp",
                [ 
                  new Ingredient("Meat", 20),
                  new Ingredient("Salt", 5),
                  new Ingredient("Pepper", 7)
                ]
    ),
    new Recipe(
                "Burger",
                 "Delicious Burger",
                  "../assets/recipe/burger.jpeg",
                  [ 
                    new Ingredient("Meat", 20),
                    new Ingredient("Bun", 2),
                    new Ingredient("Pepper", 7),
                    new Ingredient("Salt", 5)
                  ]
    )
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
      return this.recipes.slice();
  }

  getRecipe(index){
    return this.recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}