import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {FeedbackComponent} from "./feedback.component";
import {FeedbackRoutingModule} from "./feedback-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FeedbackRoutingModule
    ],
    declarations: [
        FeedbackComponent
    ],
    providers: [
    ]
})
export class FeedbackModule {}