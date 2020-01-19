import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("Steak", "Delicious Steak", "../assets/recipe/steak.jpg"),
    new Recipe("Burger", "Delicious Burger", "../assets/recipe/burger.jpeg")
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.selectedRecipe.emit(recipe);
  }
}
