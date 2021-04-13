import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FeedbackComponent} from "./feedback.component";
import {FeedbackSuccessComponent} from "./feedback-success/feedback-success.component";
import {FeedbackErrorComponent} from "./feedback-error/feedback-error.component";

@NgModule({
    imports: [

    ],
    exports: [
        RouterModule
    ]
})
export class FeedbackRoutingModule { }