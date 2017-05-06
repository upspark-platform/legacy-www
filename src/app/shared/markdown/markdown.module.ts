import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MarkdownBlockComponent} from "./markdown-block.component";
import {MarkdownContentComponent} from "./markdown-content.component";
import {MarkdownBlockLinkComponent} from "./markdown-block-link.component";
import {SanitizeHtmlPipe} from "../sanitize-html.pipe";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MarkdownBlockComponent,
        MarkdownBlockLinkComponent,
        MarkdownContentComponent,
        SanitizeHtmlPipe
    ],
    exports: [
        MarkdownBlockComponent,
        MarkdownBlockLinkComponent,
        MarkdownContentComponent
    ],
    providers: [
        SanitizeHtmlPipe
    ]
})
export class MarkdownModule {}