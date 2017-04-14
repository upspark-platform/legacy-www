import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MarkdownBlockComponent} from "./markdown-block.component";
import {MarkdownContentComponent} from "./markdown-content.component";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MarkdownBlockComponent,
        MarkdownContentComponent
    ],
    exports: [
        MarkdownBlockComponent,
        MarkdownContentComponent
    ],
    providers: [
    ]
})
export class MarkdownModule {}