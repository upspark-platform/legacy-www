import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { MetaService } from 'ng2-meta';
import {LandingComponent} from "./landing.component";
import {LandingRoutingModule} from "./landing-routing.module";
import {SharedModule} from "../shared/shared-module";

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        SharedModule
    ],
    declarations: [
        LandingComponent
    ],
    providers: [
    ]
})
export class LandingModule {

    constructor() {
    }

}