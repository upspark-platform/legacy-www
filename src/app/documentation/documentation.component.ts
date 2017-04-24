import {Component} from "@angular/core";
import {MarkdownContent} from "../shared/markdown/markdown-content";

const documentation:MarkdownContent = new MarkdownContent(require('../../docs/documentation.json'));

@Component({
    selector: 'up-documentation',
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent {

    public content:MarkdownContent = documentation;

}