import {Component, Input} from "@angular/core";

@Component({
    selector: 'up-code',
    templateUrl: './code.component.html',
    styleUrls: ["./code.component.scss"]
})
export class CodeComponent {

    private lines:string[] = [];

    private highlightStart:number = -1;
    private highlightEnd:number = -1;

    @Input()
    public set contents(value:string) {
        value = value.trim();

        this.lines = value.split(/\n|\r\n/).map(line => line.replace(/\s+$/, ''));
    }

    @Input()
    public set highlight(value:number) {
        this.highlightStart = value;
        this.highlightEnd = value;
    }

}