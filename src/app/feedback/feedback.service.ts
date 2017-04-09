import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Feedback} from "./feedback";
import {ApiResult} from "../shared/api/api-result";

@Injectable()
export class FeedbackService {

    constructor(private http: Http) {
    }

    public submit(feedback: Feedback): Promise<boolean> {
        const url:string = `${API_URL}/feedback`;

        const fragment:Feedback = new Feedback(null);

        fragment.type = feedback.selected.id;
        fragment.image = feedback.image;
        fragment.email = feedback.email;
        fragment.content = feedback.content;

        delete fragment.selected;

        return this.http.post(url, fragment)
            .toPromise()
            .then(response => response.json() as ApiResult)
            .then(result => result.errors.length === 0);
    }

}