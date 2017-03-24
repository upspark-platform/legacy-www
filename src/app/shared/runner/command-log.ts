export class CommandLog {

    constructor(public type: string = '',
                public title: string = '',
                public loading: boolean = false,
                public error: boolean = false) {
    }

}