import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TutorialComponent} from "./tutorial.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'tutorial',
                component: TutorialComponent,
                data: {
                    meta: {
                        title: 'Upspark - Getting Started',
                    }
                }
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class TutorialRoutingModule { }