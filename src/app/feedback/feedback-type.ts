export class FeedbackType {

    constructor(public id:string,
                public icon: string,
                public title: string,
                public descriptionItems: string[],
                public descriptionListItems: string[],
                public selected: boolean = false) {
    }

}