import {Component, ElementRef, OnInit, Sanitizer, ViewChild} from "@angular/core";
import {FeedbackType} from "./feedback-type";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

const types:FeedbackType[] = require("./feedback-types");
const emailValidatorExpression:RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
    selector: 'up-downloads',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

    ngOnInit() {
        this.type = types.find(type => type.selected);
    }

    constructor(private sanitizer:DomSanitizer) {
    }

    public type:FeedbackType;
    public types:FeedbackType[] = types;
    public feedback:string = '';
    public preview:SafeStyle;
    public submitting:boolean;
    public loading:boolean;
    public email:string = '';
    public attachment:string;
    public attachmentError:string;

    @ViewChild("image")
    public image:ElementRef;

    public onTypeClick(selectedType:FeedbackType) {
        if(this.submitting) {
            return;
        }

        this.type = selectedType;

        selectedType.selected = true;

        types.filter(type => type.id !== selectedType.id)
            .forEach(type => type.selected = false);
    }

    public get feedbackLength():number {
        return this.feedback
            .split(/\n|\r|\n\r|\r\n/g)
            .map(line => line.trim())
            .filter(line => line)
            .join("")
            .trim().length;
    }

    public get valid() {
        let length:number = this.feedbackLength;

        return length >= 10
            && length <= 500
            && this.email
            && emailValidatorExpression.test(this.email);
    }

    public resetAttachment() {
        this.preview = null;
        this.attachment = null;
    }

    public clearImage() {
        this.preview = null;
    }

    public onImageChange() {
        this.attachmentError = null;

        if (!this.image.nativeElement.files
            || !this.image.nativeElement.files[0]) {

            this.resetAttachment();
            return;
        }

        const upload:File = this.image.nativeElement.files[0];

        if (!upload.type.startsWith("image/")) {
            this.attachmentError = 'Selected file was not an image!';
            this.resetAttachment();
            return;
        }

        if (upload.size > 10000000) {
            this.attachmentError = 'Selected file exceeded 10MB';
            this.resetAttachment();
            return;
        }

        this.loading = true;

        let reader = new FileReader();

        reader["onload"] = (event:any) => {
            this.attachment = event.target.result;
            this.preview = this.sanitizer.bypassSecurityTrustStyle(
                'url(' + this.attachment + ')'
            );

            this.loading = false;
        };

        reader.readAsDataURL(upload);
    }

    public onFeedbackUpdate(event:Event) {
        this.feedback = event.target["value"];
    }

    public selectImage() {
        $(this.image.nativeElement).click();
    }

    public submit() {
        if(this.submitting
            || !this.feedback
            || this.feedback.length > 500) {
            return;
        }

        this.submitting = true;
    }

}