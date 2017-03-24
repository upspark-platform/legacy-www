import {CommandArgument} from "./command-argument";
export class Command {

    constructor(public type:string = '',
                public command: string = '',
                public args: CommandArgument[],
                public output: string = '',
                public time: number = 50,
                public error:boolean = false) {
    }

}