import {CommandArgument} from "./command-argument";
import {CommandOutput} from "./command-out";
export class Command {

    constructor(public type:string = '',
                public command: string = '',
                public args: CommandArgument[] = [],
                public output: CommandOutput[] = [],
                public time: number = 50,
                public error:boolean = false) {
    }

}