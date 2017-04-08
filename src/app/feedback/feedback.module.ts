import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {FeedbackComponent} from "./feedback.component";
import {FeedbackRoutingModule} from "./feedback-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FeedbackRoutingModule,
        FormsModule
    ],
    declarations: [
        FeedbackComponent
    ],
    providers: [
    ]
})
export class FeedbackModule {}