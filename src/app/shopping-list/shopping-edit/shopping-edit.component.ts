import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild ('name', {static: false}) name : ElementRef;
  @ViewChild ('amount', {static: false}) amount : ElementRef;
  @Output() addedIngredient  = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(){
      const ing = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value );
      this.shoppingListService.addIngredient(ing);
  }

}
