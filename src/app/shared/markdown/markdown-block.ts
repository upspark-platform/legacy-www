export class MarkdownBlock {

    constructor(public title:string,
                public content:string,
                ...children:MarkdownBlock[]) {
        this.children = children;
    }

    get id():string {
        return this.title.toLowerCase().replace(/\s+/g, '-');
    }

    children:MarkdownBlock[];

}