import {MarkdownBlock} from "./markdown-block";

export class MarkdownContent {

    public content:MarkdownBlock[];
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

    constructor(...content:MarkdownBlock[]) {
        this.content = content;
        this.flattenedContent = this.flatten(content);
    }

}