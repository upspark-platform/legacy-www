import {MarkdownBlock} from "./markdown-block";
import {MarkdownContentMeta} from "./markdown-content-meta";
import {MarkdownMeta} from "./markdown-meta";
import {Compiler, Component, ComponentFactoryResolver, NgModule} from "@angular/core";
import {SharedModule} from "../shared-module";

export class MarkdownContent {

    public flattenedContent: MarkdownBlock[];

    public flatten(content: MarkdownBlock[]): MarkdownBlock[] {
        let blocks: MarkdownBlock[] = [];

        content.forEach(block => {
            blocks.push(block);

            if (block.children) {
                blocks.push(...this.flatten(block.children));
            }
        });

        return blocks;
    }

    constructor(public content: MarkdownBlock[],
                public meta: MarkdownContentMeta) {
        this.flattenedContent = this.flatten(content).map(block => this.process(block, this.meta));
    }

    process(block: MarkdownBlock, contentMeta: MarkdownContentMeta): MarkdownBlock {

        if (!block.content) {
            block.content = 'TBA';
        } else {
            const html = $(block.content).toArray();
            const result: string[] = [];

            html.forEach((htmlElement: HTMLElement) => {
                if(!htmlElement.outerHTML || !htmlElement.innerHTML) {
                    return;
                }

                const element = $(`<content>${htmlElement.outerHTML}</content>`);

                element.find("h2").html((index: number, html: string) => {
                    return `<span>${html}</span>`;
                });


                element.find("img").replaceWith(function () {
                    const $img = $(this);
                    const source = decodeURI($img.attr("src"))

                    let key = source.replace(/\//g, "\\");
                    if (key.startsWith(".\\")) {
                        key = key.slice(2);
                    }

                    const meta: MarkdownMeta = contentMeta[key];
                    if (!meta) {
                        return $img.contents();
                    }

                    const ratio = (meta.size.height/meta.size.width) * 100;

                    return `<div class="markdown-image" style="padding-top:${ratio}%">
                                <div class="markdown-image-source">${source}</div>
                                <div class="markdown-image-loader-modal">
                                    <div class="markdown-image-loader-container">
                                        <div class="markdown-image-loader-anchor">
                                            <div class="markdown-image-loader">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                });

                result.push(element.html() || '');
            });

            block.content = result.filter(Boolean).join("");

        }

        return block;
    }

}


