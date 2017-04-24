import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {DocumentationComponent} from "./documentation.component";
import {DocumentationRoutingModule} from "./documentation-routing.module";
import {MarkdownModule} from "../shared/markdown/markdown.module";

@NgModule({
    imports: [
        CommonModule,
        DocumentationRoutingModule,
        MarkdownModule
    ],
    declarations: [
        DocumentationComponent
    ],
    providers: [
    ]
})
export class DocumentationModule {}