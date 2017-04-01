import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FeedbackComponent} from "./feedback.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'feedback',
                component: FeedbackComponent,
                data: {
                    meta: {
                        title: 'Upspark - Feedback',
                    }
                }
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class FeedbackRoutingModule { }