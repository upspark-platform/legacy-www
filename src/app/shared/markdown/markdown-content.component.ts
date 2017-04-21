import {AfterViewInit, Component, Input, OnDestroy, OnInit} from "@angular/core";
import {MarkdownContent} from "./markdown-content";
import {Util} from "../util";

@Component({
    selector: 'up-markdown-content',
    templateUrl: './markdown-content.component.html',
    styleUrls: ["./markdown-content.component.scss"]
})
export class MarkdownContentComponent implements AfterViewInit, OnDestroy {

    private timeout:any;
    private $window:any;
    private $body:any;
    private $toc:any;
    private $docs:any;
    private isTOCMode:boolean;

    ngOnDestroy() {
        this.deactivateDocNavigation();
    }

    deactivateDocNavigation() {
        this.$window.off('resize.theme.nav');
        this.$window.off('scroll.theme.nav');

        this.$toc.css({
            position: '',
            left: '',
            top: ''
        });

        if(this.timeout) {
           clearTimeout(this.timeout);
        }
    };

    maybeActivateDocNavigation () {
        if (this.$window.width() > 600) {
            this.activateDocNavigation();

            console.log("active docs");
        } else {
            this.deactivateDocNavigation()
        }
    }

    updateCache(cache:any) {
        const offset:any = this.$docs.offset();

        cache.containerTop   = offset.top;
        cache.containerRight = offset.left + this.$docs.width() + 40;
    }

    measure(cache:any) {
        const scrollTop = this.$window.scrollTop();
        const distance =  Math.max(scrollTop - cache.containerTop, 0);

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

    update(cache:any) {
        this.updateCache(cache);
        this.measure(cache);
    }

    scroll() {
        Util.scrollToTop();
    }


    activateDocNavigation() {

        let cache = {};

        this.updateCache(cache);
        this.measure(cache);

        this.$window
        .on('resize.theme.nav', () => this.update(cache))
        .on('scroll.theme.nav', () => this.update(cache));

        this.$body.scrollspy({
            target: '#toc',
            children: 'li > a'
        });

        if(!this.timeout) {
            this.timeout = setTimeout(() =>  this.$body.scrollspy('refresh'), 1000);
        }
    }

    ngAfterViewInit() {
        this.$toc = $('#toc');
        this.$docs = $('.docs-content');
        this.$body = $('body');
        this.$window = $(window);

        this.maybeActivateDocNavigation();

        this.$window.on('resize', this.maybeActivateDocNavigation.bind(this))
    }

    @Input()
    public content:MarkdownContent;

}