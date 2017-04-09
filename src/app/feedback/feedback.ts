import {FeedbackType} from "./feedback-type";
export class Feedback {

    constructor(public selected: FeedbackType) {
    }

    public type:string = '';
    public email: string = '';
    public content: string = '';
    public image: string;

}

