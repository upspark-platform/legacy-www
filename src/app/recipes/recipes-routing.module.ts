import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'recipes',
                component: RecipesComponent,
                data: {
                    meta: {
                        title: 'Upspark - Recipes',
                    }
                }
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class RecipesRoutingModule { }