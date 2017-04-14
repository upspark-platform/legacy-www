import {Component, Input} from "@angular/core";
import {MarkdownBlock} from "./markdown-block";

@Component({
    selector: 'up-markdown-block-link',
    templateUrl: './markdown-block-link.component.html',
    styleUrls: ["./markdown-block-link.component.scss"]
})
export class MarkdownBlockLinkComponent {

    @Input()
    public content:MarkdownBlock;

}