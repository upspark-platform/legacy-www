import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {FeedbackComponent} from "./feedback.component";
import {FeedbackRoutingModule} from "./feedback-routing.module";
import {FormsModule} from "@angular/forms";
import {FeedbackService} from "./feedback.service";
import {HttpModule} from "@angular/http";
import {FeedbackSuccessComponent} from "./feedback-success/feedback-success.component";
import {FeedbackErrorComponent} from "./feedback-error/feedback-error.component";

@NgModule({
    imports: [
        CommonModule,
        FeedbackRoutingModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        FeedbackComponent,
        FeedbackSuccessComponent,
        FeedbackErrorComponent
    ],
    providers: [
        FeedbackService,
    ]
})
export class FeedbackModule {}