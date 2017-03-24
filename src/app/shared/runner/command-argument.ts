export class CommandArgument {

    constructor(public contents: string = '',
                public multiline: boolean = false,
                public interval:number = 10) {
    }

}