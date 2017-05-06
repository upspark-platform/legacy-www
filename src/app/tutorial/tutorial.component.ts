import {Component} from "@angular/core";
import {MarkdownContent} from "../shared/markdown/markdown-content";
import {MarkdownBlock} from "../shared/markdown/markdown-block";

const tutorial:MarkdownContent = new MarkdownContent(
    require('../../docs/tutorial.json'),
    require('../../docs/tutorial.meta.json')
);

@Component({
    selector: 'up-tutorial',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {

    public content:MarkdownContent = tutorial;

}