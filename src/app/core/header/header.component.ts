import {Component, Input} from "@angular/core";

@Component({
    selector: 'up-header',
    templateUrl: './header.component.html',
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {

    @Input()
    private title:string = META.TITLE;

}