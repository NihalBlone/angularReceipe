import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
 ingredients: Ingredient[] = [ new Ingredient( "Apples", 50) ,
 new Ingredient("Grapes" , 100)
];
  constructor() { }

  ngOnInit() {
  }

}
