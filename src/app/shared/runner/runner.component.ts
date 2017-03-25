import {Component, Input, OnInit, style, transition, trigger, animate} from "@angular/core";
import {Command} from "./command";
import {CommandArgument} from "./command-argument";
import {CommandLog} from "./command-log";
import {CommandOutput} from "./command-out";
import {Runner} from "./runner";

@Component({
    selector: 'up-runner',
    templateUrl: './runner.component.html',
    styleUrls: ["./runner.component.scss"],
    animations: [
        trigger('slide', [
            transition('void => *', [
                style({left: '100%'}),
                animate(500, style({left: '*'})),
            ])
        ]),
        trigger('fade', [
            transition('* => void', [
                style({opacity: 1}),
                animate(200, style({opacity: 0})),
            ])
        ])
    ]
})
export class RunnerComponent implements Runner {

    @Input()
    public command:string = '';
    @Input()
    public log:CommandLog[] = [];
    @Input()
    public args:CommandArgument[] = [];
    @Input()
    public output:CommandOutput[] = [];

}