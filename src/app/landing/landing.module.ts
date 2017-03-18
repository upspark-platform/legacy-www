import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {LandingComponent} from "./landing.component";
import {LandingRoutingModule} from "./landing-routing.module";

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule
    ],
    declarations: [
        LandingComponent
    ],
    providers: [
    ]
})
export class LandingModule {}