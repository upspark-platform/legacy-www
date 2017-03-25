import {CommandLog} from "./command-log";
import {CommandArgument} from "./command-argument";
import {CommandOutput} from "./command-out";
import {Command} from "./command";

export interface Runner {

    command:string;
    log:CommandLog[];
    args:CommandArgument[];
    output:CommandOutput[];

}