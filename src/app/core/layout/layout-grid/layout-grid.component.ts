import {Component, HostBinding, Input} from "@angular/core";

@Component({
    selector: 'grid',
    templateUrl: './layout-grid.component.html',
    styleUrls: ["./layout-grid.component.scss"]
})
export class LayoutGrid {

    @HostBinding("class.vertical")
    @Input("vertical")
    public vertical:boolean = false;

    @HostBinding("class.reverse")
    @Input("reverse")
    public reverse:boolean = false;

}