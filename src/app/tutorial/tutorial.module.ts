import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {TutorialComponent} from "./tutorial.component";
import {TutorialRoutingModule} from "./tutorial-routing.module";
import {MarkdownModule} from "../shared/markdown/markdown.module";

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule,
        TutorialRoutingModule
    ],
    declarations: [
        TutorialComponent
    ],
    providers: [
    ]
})
export class TutorialModule {}