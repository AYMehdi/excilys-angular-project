import {Component} from '@angular/core';
import {MOCK_RECIPES} from './recipe/recipe.mock'

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jarvis-angular-project';
  listRecipes = MOCK_RECIPES;
}