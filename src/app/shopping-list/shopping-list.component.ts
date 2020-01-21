import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
//  ingredients: Ingredient[] = [ new Ingredient( "Apples", 50) ,
//  new Ingredient("Grapes" , 100)
// ];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients= this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientIsAdded.subscribe(
      (updatedIngredients: Ingredient[]) => {
        this.ingredients = updatedIngredients
      }
    );

  }

}
