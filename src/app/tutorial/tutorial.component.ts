import {Component} from "@angular/core";
import {MarkdownContent} from "../shared/markdown/markdown-content";
import {MarkdownBlock} from "../shared/markdown/markdown-block";

const tutorial:MarkdownContent = new MarkdownContent(
    new MarkdownBlock("Download", require("./markdown/download.md")),
    new MarkdownBlock("Platform", require("./markdown/platform.md"),
        new MarkdownBlock("The Script", require("./markdown/platform-script.md"))
    )
);

@Component({
    selector: 'up-tutorial',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {

    public content:MarkdownContent = tutorial;

}