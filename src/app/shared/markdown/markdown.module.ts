import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MarkdownBlockComponent} from "./markdown-block.component";
import {MarkdownContentComponent} from "./markdown-content.component";
import {MarkdownBlockLinkComponent} from "./markdown-block-link.component";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MarkdownBlockComponent,
        MarkdownBlockLinkComponent,
        MarkdownContentComponent
    ],
    exports: [
        MarkdownBlockComponent,
        MarkdownBlockLinkComponent,
        MarkdownContentComponent
    ],
    providers: [
    ]
})
export class MarkdownModule {}