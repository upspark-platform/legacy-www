import {Component} from "@angular/core";
import {MarkdownContent} from "../shared/markdown/markdown-content";

const tutorial:MarkdownContent = new MarkdownContent(
    require("../../markdown/tutorial/content.json"),

    {
        "download": require("../../markdown/tutorial/download.md"),
        "platform": require("../../markdown/tutorial/platform.md")
    }
);

@Component({
    selector: 'up-tutorial',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {

}