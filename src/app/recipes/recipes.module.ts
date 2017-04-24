import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {RecipesComponent} from "./recipes.component";
import {RecipesRoutingModule} from "./recipes-routing.module";
import {MarkdownModule} from "../shared/markdown/markdown.module";

@NgModule({
    imports: [
        CommonModule,
        RecipesRoutingModule,
        MarkdownModule
    ],
    declarations: [
        RecipesComponent
    ],
    providers: [
    ]
})
export class RecipesModule {}