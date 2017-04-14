import {MarkdownBlock} from "./markdown-block";
export class MarkdownContent {
    
    public content:MarkdownBlock[];

    constructor(meta:{[key:string]:MarkdownBlock},
                content:{[key:string]:string}) {
        this.content = Object.keys(meta).map((key:string) => {
           meta[key].html = content[key];
           return meta[key];
        });
    }

}