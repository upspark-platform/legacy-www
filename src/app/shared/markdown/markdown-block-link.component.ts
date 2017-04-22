import {Component, EventEmitter, Input} from "@angular/core";
import {MarkdownBlock} from "./markdown-block";
import {Util} from "../util";
import {NavigationExtras, Router} from "@angular/router";

@Component({
    selector: '[up-markdown-block-link]',
    templateUrl: './markdown-block-link.component.html',
    styleUrls: ["./markdown-block-link.component.scss"]
})
export class MarkdownBlockLinkComponent {

    @Input()
    public content: MarkdownBlock;

    constructor(private router: Router) {
    }

    static scrollTo(location: string):Promise<any> {
        const $element = $(`#${location}:visible`);
        if (!$element.length) {
            return Promise.resolve(true);
        }

        return Util.scrollTo(`#${location}`, "fast", "linear", 50, `#${location}__container`);
    }

    public focus(location: string, isNatural:boolean = false) {

        let navigationExtras: NavigationExtras = {
            fragment: location
        };
        this.router.navigate(
            [Util.getSlice(this.router.url, '#', true)],
            navigationExtras
        ).catch(console.error);

        return false;
    }


}