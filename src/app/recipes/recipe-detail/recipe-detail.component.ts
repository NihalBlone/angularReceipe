import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router){}

  id: number;
  recipe: Recipe;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'] // + sign makes string type data to number type data.
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  addToShoppingList(){
    this.recipeService.addToShoppingList(this.recipe.ingredients)
  }

  editShopping(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
