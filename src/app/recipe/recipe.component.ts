import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  public show:Boolean=false;
  public buttonShowName:String="show more";

  @Input()
  recipe: Recipe;

  constructor() {}

  ngOnInit() {}  

  toggleExpand() {
    this.show = !this.show;

    if(this.show)
      this.buttonShowName = "show less";
    else 
      this.buttonShowName = "show more"
  }

  delete() {}
}