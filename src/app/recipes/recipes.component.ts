import {Component} from "@angular/core";
import {MarkdownContent} from "../shared/markdown/markdown-content";

const recipes:MarkdownContent = new MarkdownContent(require('../../docs/recipes.json'));

@Component({
    selector: 'up-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {

    public content:MarkdownContent = recipes;

}