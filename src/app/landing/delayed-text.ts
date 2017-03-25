import { Observable } from 'rxjs/Observable';

export class DelayedText {

    constructor(private consumer: (value: string) => any,
                private text: string = '') {
    }

    private consume(block:string) {
        this.text += block;

        this.consumer(this.text);
    }

    private getBlockExecutor(block:string, interval:number) {
        return (resolve: (value: string) => any, reject: (reason: any) => any) => {

            let characters: string[] = block.split("");

            const next = () => this.consume(characters.shift());
            const done = () => resolve(this.text);

            Observable
                .interval(interval)
                .timeInterval()
                .take(characters.length)
                .subscribe(
                    next,
                    reject,
                    done
                );

        };
    }


    public append(block: string, interval: number = 0): Promise<string> {
        block = '' + block;

        if (!interval || interval < 0) {
            this.consume(block);

            return Promise.resolve(this.text);
        }


        return new Promise<string>(this.getBlockExecutor(block, interval));
    }


    empty() {
        this.text = '';
        this.consumer(this.text);
    }

}