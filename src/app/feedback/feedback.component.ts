import {Component, OnInit} from "@angular/core";
import {FeedbackType} from "./feedback-type";

const types:FeedbackType[] = require("./feedback-types");

@Component({
    selector: 'up-downloads',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

    ngOnInit() {
        this.type = types.find(type => type.selected);
    }

    public type:FeedbackType;
    public types:FeedbackType[] = types;
    public feedback:string = '';

    public onTypeClick(selectedType:FeedbackType) {
        this.type = selectedType;

        selectedType.selected = true;

        types.filter(type => type.id !== selectedType.id)
            .forEach(type => type.selected = false);
    }

    public onFeedbackUpdate(event:Event) {
        this.feedback = event.target["value"];
    }

}