import {Component, Input} from "@angular/core";
import {MarkdownContent} from "./markdown-content";

@Component({
    selector: 'up-markdown-content',
    templateUrl: './markdown-content.component.html',
    styleUrls: ["./markdown-content.component.scss"]
})
export class MarkdownContentComponent {

    @Input()
    public content:MarkdownContent;

}