import {AfterViewInit, Component, ElementRef, OnInit, Sanitizer, ViewChild} from "@angular/core";
import {FeedbackType} from "./feedback-type";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";
import {FeedbackService} from "./feedback.service";
import {Feedback} from "./feedback";
import {Util} from "../shared/util";
import {Router} from "@angular/router";

const types: FeedbackType[] = require("./feedback-types");

@Component({
    selector: 'up-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit,AfterViewInit {

    ngAfterViewInit() {
        Util.scrollToTop();
    }

    ngOnInit() {
        this.feedback = new Feedback(types.find(type => type.selected));
    }

    constructor(private sanitizer: DomSanitizer,
                private feedbackService: FeedbackService,
                private router: Router) {
    }

    public feedback: Feedback;
    public preview: SafeStyle;
    public submitting: boolean;
    public attachmentError: string;

    @ViewChild("image")
    public image: ElementRef;

    public onTypeClick(selectedType: FeedbackType) {
        if (this.submitting) {
            return;
        }
        this.feedback.selected = selectedType;

        selectedType.selected = true;

        types.filter(type => type.id !== selectedType.id)
            .forEach(type => type.selected = false);
    }

    public resetAttachment() {
        this.preview = null;
        this.feedback.image = null;
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

        const upload: File = this.image.nativeElement.files[0];

        if (!upload.type.startsWith("image/")) {
            this.attachmentError = 'Selected file was not an image!';
            this.resetAttachment();
            return;
        }


        if (upload.size > 75000) {
            this.attachmentError = 'Sorry, that image exceeds our limit of 75 KB. Consider using an external image host and providing us that link.';
            this.resetAttachment();
            return;
        }

        let reader = new FileReader();

        reader["onload"] = (event: any) => {
            this.feedback.image = event.target.result;
            this.preview = this.sanitizer.bypassSecurityTrustStyle(
                'url(' + this.feedback.image + ')'
            );
        };

        reader.readAsDataURL(upload);
    }


    public selectImage() {
        $(this.image.nativeElement).click();
    }

    public submit() {
        if (this.submitting || !this.valid) {
            return;
        }

        this.submitting = true;

        const navigate = (valid: boolean = false) => {
            return this.router.navigateByUrl(
                `/feedback/${!valid ? 'error' : 'success'}`,
                {skipLocationChange: true}
            )
        };

        this.feedbackService
            .submit(this.feedback)
            .then(navigate)
            .catch((error: any) => {
                console.error(error);

                return navigate(false);
            });
    }

    public get length(): number {
        return this.feedback.content
            .split(/\n|\r|\n\r|\r\n/g)
            .map(line => line.trim())
            .filter(line => line)
            .join("")
            .trim().length;
    }

    public get types(): FeedbackType[] {
        return types;
    }

    public onFeedbackChangeEvent(event: Event) {
        this.feedback.content = event.target["value"];
    }

    public get valid(): boolean {
        let length: number = this.length;

        return length >= 10
            && length <= 500
            && this.feedback.email
            && Util.isValidEmail(this.feedback.email);
    }

}