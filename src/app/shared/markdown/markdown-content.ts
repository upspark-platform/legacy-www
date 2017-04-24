import {MarkdownBlock} from "./markdown-block";

export class MarkdownContent {

    public flattenedContent:MarkdownBlock[];

    public flatten(content:MarkdownBlock[]):MarkdownBlock[] {
        let blocks:MarkdownBlock[] = [];

        content.forEach(block => {
           blocks.push(block);

           if(block.children) {
               blocks.push(...this.flatten(block.children));
           }
        });

        return blocks;
    }

    constructor(public content:MarkdownBlock[]) {
        this.flattenedContent = this.flatten(content);
    }

}