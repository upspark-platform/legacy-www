import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {RecipesComponent} from "./recipes.component";
import {RecipesRoutingModule} from "./recipes-routing.module";

@NgModule({
    imports: [
        CommonModule,
        RecipesRoutingModule
    ],
    declarations: [
        RecipesComponent
    ],
    providers: [
    ]
})
export class RecipesModule {}