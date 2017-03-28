import {RunnerModel} from "../shared/runner/runner-model";
import {DelayedText} from "./delayed-text";
import {CommandLog} from "../shared/runner/command-log";
import {CommandOutput} from "../shared/runner/command-out";
import {CommandArgument} from "../shared/runner/command-argument";
export class LandingDemo {

    public runner: RunnerModel = new RunnerModel();
    public script: boolean = false;

    public command: DelayedText = new DelayedText(
        value => this.runner.command = value
    );

    public scriptFile: DelayedText;

    init(platform:string, consumer: (value: string) => any): any {

        this.scriptFile = new DelayedText(consumer, platform);

        this.run(':', 'path', null, 500, 'C:\\Users\\David\\.upspark')
            .then(this.wait(2000))
            .then(() => this.run('#', 'sort', [1000, 50, 500], 500, [
                '[',
                '    50,',
                '    500,',
                '    1000',
                ']'
            ]))
            .then(this.wait(2000))
            .then(() => this.run(':', 'platform', null, 500, 'Platform script opened in default editor').then(() => this.script = true))
            .then(this.wait(2000))
            .then(() => this.platform(
                "",
                "export function format(json) {",
                "    return JSON.parse(json);",
                "}"
            ))
            .then(this.wait(2000))
            .then(() => this.run(':', 'clear', null, 10, '').then(() =>  {
                this.runner.log.splice(0, this.runner.log.length);
                this.runner.output.splice(0, this.runner.output.length);
            }))
            .then(this.wait(2000))
            .then(() => this.run(':', 'reload', ["commands"], 10, 'Reloaded 2 commands'))
            .then(this.wait(2000))
            .then(() => this.run('#', 'format', ['{list:[\"a\",\"b\",\"c\"],value:null,number:100}'], 500, [
                "{",
                "    \"list\": [",
                "        \"a\",",
                "        \"b\",",
                "        \"c\",",
                "     ],",
                "     \"value\": null,",
                "     \"number\": 100",
                "}"
            ]))
            .then(this.wait(2000))
            .then(() => this.run(':', 'clear', null, 10, '').then(() =>  {
                this.runner.log.splice(0, this.runner.log.length);
                this.runner.output.splice(0, this.runner.output.length);
            }))
            .then(this.wait(2000))
            .then(() => this.input('#', 'hello', ["upspark", ":-)"]))

    }

    platform(...lines:string[]): Promise<any> {
        return this.scriptFile.append(lines.join('\n'), 100)
    }

    input(type: string, command: string, args: any): Promise<any> {

        let display: string = command;
        if (type !== '#') {
            display = type + command;
        }

        let commandArguments: CommandArgument[] = null;

        if (args) {

            if (Array.isArray(args)) {
                commandArguments = args.slice().map(content => new CommandArgument([].concat(content)))
            } else if (typeof args === 'string') {
                commandArguments = [new CommandArgument([args])];
            } else {
                commandArguments = Object.keys(args).map(interval => new CommandArgument(args[interval], +interval));
            }
        }

        return this.command
            .append(display, 100)
            .then(() => {

                if (!commandArguments) {
                    return true;
                }

                let chain: Promise<any> = Promise.resolve();

                commandArguments.forEach(arg => chain = chain.then(() => {

                    let argLine: Promise<any> = Promise.resolve();
                    let contents: string[] = [];

                    const resultingArgument = new CommandArgument(contents, arg.interval);

                    arg.contents.forEach((argLineBlock, index) => argLine = argLine.then(() => {
                        contents.push('');

                        return new DelayedText(value => contents[index] = value).append(argLineBlock, arg.interval);
                    }));

                    this.runner.args.push(resultingArgument);

                    return argLine;
                }));

                return chain;

            })
    }

    run(type: string, command: string, args: any, time: number, out: any, error: boolean = false): Promise<any> {

        return this.input(
                type,
                command,
                args
            )
            .then(this.wait(500))
            .then(() => {
                this.runner.args.splice(0, this.runner.args.length);
                this.command.empty();
                this.runner.output.splice(0, this.runner.output.length);


                let tasks: Promise<any>[] = [
                    this.load(type, command, time)
                ];

                if (out && !Array.isArray(out) && typeof out !== 'string') {
                    Object.keys(out).forEach(this.getOutputConsumer(out, tasks));
                }

                return Promise.all(tasks);
            })
            .then(([entry]) => {
                entry.error = error;
                entry.loading = false;

                let result: string[] = null;

                if (typeof out === 'string') {
                    result = [out];
                } else if (Array.isArray(out)) {
                    result = out;
                } else if (out && out.hasOwnProperty("-1")) {
                    result = [out["-1"]];
                }

                if (result) {
                    const out = result.map(message => new CommandOutput(message));

                    this.runner.output.unshift(...out);
                }
            })

    }

    load(type: string, command: string, time: number): Promise<CommandLog> {

        const entry = new CommandLog(
            type,
            command,
            true
        );

        this.runner.log.unshift(entry);

        return this.wait(time)().then(() => entry);
    }

    getOutputConsumer(out: any, tasks: Promise<any>[]) {
        return (timeout: string) => {

            const message: CommandOutput[] = [].concat(out[timeout]).map(out => new CommandOutput(out));

            tasks.push(
                this.wait(+timeout)().then(() => this.runner.output.unshift(
                    ...message
                ))
            );

        };
    }

    wait(time: number): () => Promise<any> {
        return () => new Promise<any>((resolve: () => any) => setTimeout(resolve, time));
    }

}
