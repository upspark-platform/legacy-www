import {CommandArgument} from "./command-argument";
import {CommandLog} from "./command-log";
import {CommandOutput} from "./command-out";
import {Runner} from "./runner";

export class RunnerModel implements Runner {

    public command: string = '';
    public log: CommandLog[] = [];
    public args: CommandArgument[] = [];
    public output: CommandOutput[] = [];

}