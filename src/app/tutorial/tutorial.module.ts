import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {TutorialComponent} from "./tutorial.component";
import {TutorialRoutingModule} from "./tutorial-routing.module";

@NgModule({
    imports: [
        CommonModule,
        TutorialRoutingModule
    ],
    declarations: [
        TutorialComponent
    ],
    providers: [
    ]
})
export class TutorialModule {}