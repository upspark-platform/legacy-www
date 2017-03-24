import {Component} from "@angular/core";
import {Command} from "./command";
import {CommandArgument} from "./command-argument";
import {CommandLog} from "./command-log";
import {CommandOutput} from "./command-out";

@Component({
    selector: 'up-runner',
    templateUrl: './runner.component.html',
    styleUrls: ["./runner.component.scss"]
})
export class RunnerComponent {

    constructor() {

        this.command = 'xxxx';

        this.args = [
            'aaa',
            'bbbb'
        ];

        this.output = [
            new CommandOutput('xxx'),
            new CommandOutput('zyyzzy')
        ];

        this.log = [
            new CommandLog("#", "prior", true, false),
            new CommandLog(">", "xxxx", false, false)
        ];
    }

    public command:string = '';
    public log:CommandLog[] = [];
    public args:string[] = [];
    public output:CommandOutput[] = [];

    public commands:Command[] = [

        new Command('', 'format', [
            new CommandArgument(
                'dsiofjfdsjoifdsjiodfjsidfiso'
            )
        ]),

        new Command(':', 'another', [
            new CommandArgument(
                `dsdadsadsa
                dsdfsdsdsads
                saddssdaasdsda`
            )
        ])

    ]

}