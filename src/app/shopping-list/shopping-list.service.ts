import { Ingredient } from './ingredient.model';
import { Output, EventEmitter } from '@angular/core';

export class ShoppingListService{
    
@Output() ingredientIsAdded = new EventEmitter<Ingredient[]>(); 

ingredients: Ingredient[] = [ new Ingredient( "Apples", 50) ,
 new Ingredient("Grapes" , 100)
];

getIngredients(){
    return this.ingredients.slice();
}

addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientIsAdded.emit(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    //this.ingredientIsAdded.emit(this.ingredients.slice());
}
}