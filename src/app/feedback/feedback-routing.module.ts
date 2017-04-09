import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FeedbackComponent} from "./feedback.component";
import {FeedbackSuccessComponent} from "./feedback-success/feedback-success.component";
import {FeedbackErrorComponent} from "./feedback-error/feedback-error.component";

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
            {
                path: 'feedback/success',
                component: FeedbackSuccessComponent,
                data: {
                    meta: {
                        title: 'Upspark - Feedback',
                    }
                }
            },
            {
                path: 'feedback/error',
                component: FeedbackErrorComponent,
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