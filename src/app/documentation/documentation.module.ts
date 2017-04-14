import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {DocumentationComponent} from "./documentation.component";
import {DocumentationRoutingModule} from "./documentation-routing.module";

@NgModule({
    imports: [
        CommonModule,
        DocumentationRoutingModule
    ],
    declarations: [
        DocumentationComponent
    ],
    providers: [
    ]
})
export class DocumentationModule {}