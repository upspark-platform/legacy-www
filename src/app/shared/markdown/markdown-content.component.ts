import {AfterViewInit, Component, Input, OnDestroy, OnInit} from "@angular/core";
import {MarkdownContent} from "./markdown-content";
import {Util} from "../util";
import {NavigationEnd, NavigationExtras, Router} from "@angular/router";
import {MarkdownBlockLinkComponent} from "./markdown-block-link.component";
import {Subject} from "rxjs/Subject";
import {Title} from "@angular/platform-browser";
import {MetaService} from "ng2-meta";

@Component({
    selector: 'up-markdown-content',
    templateUrl: './markdown-content.component.html',
    styleUrls: ["./markdown-content.component.scss"]
})
export class MarkdownContentComponent implements AfterViewInit, OnDestroy, OnInit, OnDestroy {

    ngOnInit() {

    }

    constructor(private router: Router, private title: Title, private meta: MetaService) {
    }

    private timeout: any;
    private $window: any;
    private $body: any;
    private $toc: any;
    private $docs: any;
    private isAlive: boolean;
    private destroyed: Subject<void> = new Subject<void>();
    private sleeping: {} = false;
    private scrolling: boolean;

    ngOnDestroy() {
        this.deactivateDocNavigation();

        this.isAlive = false;
        this.destroyed.next();
        this.destroyed.complete();
    }

    detachWindowEvents() {
        this.$window.off('resize.theme.nav');
        this.$window.off('scroll.theme.nav');
        this.$window.off('scroll.content');
        this.$window.off('activate.bs.scrollspy.toc');
    }

    deactivateDocNavigation() {
        this.detachWindowEvents();

        this.$toc.css({
            position: '',
            left: '',
            top: ''
        });

        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    };

    setTitleFromSection(section: string) {
        const title = section
            .replace(/-/g, ' ')
            .split(/\s+/g)
            .map((part: string) => part.slice(0, 1).toUpperCase().concat(part.slice(1)))
            .join(' ');

        this.title.setTitle(`${META.TITLE} - ${title}`);
    }

    maybeActivateDocNavigation() {
        if (!this.isAlive) {
            return;
        }

        if (this.$window.width() > 768) {
            this.activateDocNavigation();
        } else {
            this.deactivateDocNavigation()
        }
    }

    updateCache(cache: any) {
        const offset: any = this.$docs.offset();

        cache.containerTop = offset.top;
        cache.containerRight = offset.left + this.$docs.width() + 40;
    }

    measure(cache: any) {
        const scrollTop = this.$window.scrollTop();
        const distance = Math.max(scrollTop - cache.containerTop, 0);

        if (!distance) {
            $(this.$toc.find('li a')[1]).addClass('active');

            return this.$toc.css({
                position: '',
                left: '',
                top: ''
            });
        }

        this.$toc.css({
            position: 'fixed',
            left: cache.containerRight,
            top: 0
        })
    }

    update(cache: any) {
        this.updateCache(cache);
        this.measure(cache);
    }

    setMETA(target: string) {
        const content = this.content.flattenedContent.find(content => content.id === target);
        if (!content) {
            this.setTitleFromSection(target);
        } else {
            this.title.setTitle(`${META.TITLE} - ${content.title}`);
            if (content.about) {
                this.meta.setTag('description', content.about);
            }
        }
    }


    activateDocNavigation() {
        this.detachWindowEvents();

        let cache = {};

        this.updateCache(cache);
        this.measure(cache);

        this.$window
            .on('resize.theme.nav', () => this.update(cache))
            .on('scroll.theme.nav', () => this.update(cache));

        this.$body.scrollspy({
            target: '#toc',
            children: 'li > a',
            offset: 100
        });

        this.$window.on('activate.bs.scrollspy.toc', (event: any, target: any) => {
            if (this.scrolling) {
                return;
            }

            target = target.relatedTarget.slice(1);

            this.sleeping = true;

            let navigationExtras: NavigationExtras = {
                fragment: target,
                skipLocationChange: true
            };

            this.router.navigate(
                [Util.getSlice(this.router.url, '#', true)],
                navigationExtras,
            ).then(() => {
                this.sleeping = false;

                this.setMETA(target);
            });

        });

        if (!this.timeout) {
            this.timeout = setTimeout(() => this.$body.scrollspy('refresh'), 500);
        }
    }

    ngAfterViewInit() {

        this.$toc = $('#toc');
        this.$docs = $('.docs-content');
        this.$body = $('body');
        this.$window = $(window);

        this.detachWindowEvents();

        this.isAlive = true;

        this.maybeActivateDocNavigation();

        this.$window.on('resize.content', this.maybeActivateDocNavigation.bind(this));

        this.router.events
            .takeUntil(this.destroyed)
            .filter(event => event instanceof NavigationEnd)
            .map(event => Util.getSlice(event.url, "#", false))
            .filter(Boolean)
            .subscribe(section => {
                if (this.sleeping) {
                    return;
                }

                this.scrolling = true;

                MarkdownBlockLinkComponent.scrollTo(section).then(() => this.scrolling = false);

                this.setMETA(section);
            });

        $(".markdown-image").each(function () {
            const $image = $(this);
            const $loader = $image.find(".markdown-image-loader-modal");
            const source = $image.find(".markdown-image-source").text();

            let xhr = new XMLHttpRequest();
            xhr.onload = function() {
                const reader = new FileReader();

                reader.onloadend = function() {
                    $image.css("background-image", `url("${reader.result}")`);
                    $loader.fadeOut("slow");
                };

                reader.readAsDataURL(xhr.response);
            };
            xhr.open('GET', source);
            xhr.responseType = 'blob';
            xhr.send();
        });
    }

    @Input()
    public content: MarkdownContent;

}