import {Component, Input} from "@angular/core";
import {MarkdownBlock} from "./markdown-block";

@Component({
    selector: 'up-markdown-block',
    templateUrl: './markdown-block.component.html',
    styleUrls: ["./markdown-block.component.scss"]
})
export class MarkdownBlockComponent {

    @Input()
    public content:MarkdownBlock;

}